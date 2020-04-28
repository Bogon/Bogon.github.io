---
title: Swift 选择和播放视频
permalink: Swift 选择和播放视频
copyright: ture
date: 2020-04-28 15:30:44
keywords: iOS,Swift,Picking, playing, videos, 用户体验, 选择视频, 播放视频, AVPlayer
tags:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [UIImagePickerController]
categories:
    - [iOS]
    - [Swift]
    - [UIKit]
    - [UIImagePickerController]
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用视频选择器控制器和 ```AVPlayer``` 类（完全用 ```Swift 5``` 编写）来记录或选择视频文件。

</br>

# **让我们挑选一些视频！**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您还记得我以前有关 [***```《iOS中图像拾取》```***](http://www.xuebaonline.com/Swift%205%E4%BD%BF%E7%94%A8UIImagePickerController%E6%8B%BE%E5%8F%96%E5%9B%BE%E5%83%8F/ "") 的教程，那么您知道我已经在 ```UIKit``` 的基础上建立了一个可重用的选择器类。 如果您不知道 ```UIImagePickerController``` 类的工作方式，请先阅读该教程，因为它为您提供了有关基础知识的出色概述。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，您需要在 ```Info.plist``` 文件中添加一些密钥，因为您想访问一些个人数据。 您知道：隐私非常重要。 🤫

<!-- more -->

``` Swift
<key>NSCameraUsageDescription</key>
<string>This app wants to take pictures & videos.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>This app wants to use your picture & video library.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app wants to record sound.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>This app wants to save pictures & videos to your library.</string>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于我们不会捕获无声视频，因此我们还必须添加“隐私-麦克风使用说明”字段。 准备，开始，行动！ 🎬

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我不会对你说谎，但是这次我有点懒，所以我们的 ```VideoPicker``` 类和 ```ImagePicker``` 类是90％。 您可以创建一个抽象类，无论如何，我将向您展示最终代码，然后我们可以讨论它们之间的区别。 😅

``` Swift
import UIKit

public protocol VideoPickerDelegate: class {
    func didSelect(url: URL?)
}

open class VideoPicker: NSObject {

    private let pickerController: UIImagePickerController
    private weak var presentationController: UIViewController?
    private weak var delegate: VideoPickerDelegate?

    public init(presentationController: UIViewController, delegate: VideoPickerDelegate) {
        self.pickerController = UIImagePickerController()

        super.init()

        self.presentationController = presentationController
        self.delegate = delegate

        self.pickerController.delegate = self
        self.pickerController.allowsEditing = true
        self.pickerController.mediaTypes = ["public.movie"]
        self.pickerController.videoQuality = .typeHigh
    }

    private func action(for type: UIImagePickerController.SourceType, title: String) -> UIAlertAction? {
        guard UIImagePickerController.isSourceTypeAvailable(type) else {
            return nil
        }

        return UIAlertAction(title: title, style: .default) { [unowned self] _ in
            self.pickerController.sourceType = type
            self.presentationController?.present(self.pickerController, animated: true)
        }
    }

    public func present(from sourceView: UIView) {

        let alertController = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)

        if let action = self.action(for: .camera, title: "Take video") {
            alertController.addAction(action)
        }
        if let action = self.action(for: .savedPhotosAlbum, title: "Camera roll") {
            alertController.addAction(action)
        }
        if let action = self.action(for: .photoLibrary, title: "Video library") {
            alertController.addAction(action)
        }

        alertController.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))

        if UIDevice.current.userInterfaceIdiom == .pad {
            alertController.popoverPresentationController?.sourceView = sourceView
            alertController.popoverPresentationController?.sourceRect = sourceView.bounds
            alertController.popoverPresentationController?.permittedArrowDirections = [.down, .up]
        }

        self.presentationController?.present(alertController, animated: true)
    }

    private func pickerController(_ controller: UIImagePickerController, didSelect url: URL?) {
        controller.dismiss(animated: true, completion: nil)

        self.delegate?.didSelect(url: url)
    }
}

extension VideoPicker: UIImagePickerControllerDelegate {

    public func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        self.pickerController(picker, didSelect: nil)
    }

    public func imagePickerController(_ picker: UIImagePickerController,
                                      didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {

        guard let url = info[.mediaURL] as? URL else {
            return self.pickerController(picker, didSelect: nil)
        }

//        //uncomment this if you want to save the video file to the media library
//        if UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(url.path) {
//            UISaveVideoAtPathToSavedPhotosAlbum(url.path, self, nil, nil)
//        }
        self.pickerController(picker, didSelect: url)
    }
}

extension VideoPicker: UINavigationControllerDelegate {

}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仅有一些小的变化。 第一个是 ```mediaTypes``` 属性，您这次可以使用 ```“public.movie”``` 值。 另外，您还应该在 ```pickerController``` 上设置 ```videoQuality``` 属性，因为 ```4k``` 始终优于 ```320``` 。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;委托是最后一点改变的事情。 选择器完成工作后，您可以获取 ```.mediaURL``` 属性，该属性是获取媒体文件（也就是捕获/选定的视频文件）的 ```URL``` 。 如果记录了一个新文件，您也可以将其保存到媒体库中，这只是两行额外的代码。

恭喜，播放时间到了！ 📹

</br>

# **使用AVPlayer和UIView播放视频文件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当网页的标题背景中有一些主题很好的视频时，这不是很好吗？好吧，通过使用 ```AVFoundation``` ， ```UIKit``` 和一些底层魔术，您可以在 ```iOS``` 中获得完全相同的东西。不用担心，这并不困难。 😬

您可以使用常规的 ```UIView``` 子类，然后将其默认层替换为 ```AVPlayerLayer``` 。这样您就可以在视图中直接播放视频。同样， ```AVPlayer``` 只是一个简单的控制器对象，可以管理媒体文件的播放和定时。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最困难的部分是检查媒体文件的状态更改。例如，当我第一次尝试录制新视频时，播放器视图的回报在第二秒后不断停止。我必须搜索答案，因为我根本不是 ```AVFoundation``` 专家，但是事实证明，您应该注意 ```rate``` 属性，因为系统正在尝试缓冲视频，这可能会引起一些问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无论如何，我能够将一个相当不错的 ```VideoView``` 与一些不错的附加功能放在一起，例如不断循环播放视频或在填充/适合纵横比内容模式之间进行选择。我并不是在告诉您这是 ```100％``` 的防弹解决方案，但这是一个很好的起点，而且在某些情况下还绰绰有余。 👻

``` Swift
import UIKit
import AVFoundation

open class VideoView: UIView {

    public enum Repeat {
        case once
        case loop
    }

    override open class var layerClass: AnyClass {
        return AVPlayerLayer.self
    }

    private var playerLayer: AVPlayerLayer {
        return self.layer as! AVPlayerLayer
    }

    public var player: AVPlayer? {
        get {
            self.playerLayer.player
        }
        set {
            self.playerLayer.player = newValue
        }
    }


    open override var contentMode: UIView.ContentMode {
        didSet {
            switch self.contentMode {
            case .scaleAspectFit:
                self.playerLayer.videoGravity = .resizeAspect
            case .scaleAspectFill:
                self.playerLayer.videoGravity = .resizeAspectFill
            default:
                self.playerLayer.videoGravity = .resize
            }
        }
    }

    public var `repeat`: Repeat = .once

    public var url: URL? {
        didSet {
            guard let url = self.url else {
                self.teardown()
                return
            }
            self.setup(url: url)
        }
    }

    @available(*, unavailable)
    override init(frame: CGRect) {
        super.init(frame: frame)

        self.initialize()
    }

    @available(*, unavailable)
    public required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)

        self.initialize()
    }

    public init() {
        super.init(frame: .zero)

        self.translatesAutoresizingMaskIntoConstraints = false

        self.initialize()
    }

    open func initialize() {

    }

    deinit {
        self.teardown()
    }


    private func setup(url: URL) {

        self.player = AVPlayer(playerItem: AVPlayerItem(url: url))

        self.player?.currentItem?.addObserver(self,
                                              forKeyPath: "status",
                                              options: [.old, .new],
                                              context: nil)

        self.player?.addObserver(self, forKeyPath: "rate", options: [.old, .new], context: nil)


        NotificationCenter.default.addObserver(self,
                                               selector: #selector(self.itemDidPlayToEndTime(_:)),
                                               name: .AVPlayerItemDidPlayToEndTime,
                                               object: self.player?.currentItem)

        NotificationCenter.default.addObserver(self,
                                               selector: #selector(self.itemFailedToPlayToEndTime(_:)),
                                               name: .AVPlayerItemFailedToPlayToEndTime,
                                               object: self.player?.currentItem)
    }

    private func teardown() {
        self.player?.pause()

        self.player?.currentItem?.removeObserver(self, forKeyPath: "status")

        self.player?.removeObserver(self, forKeyPath: "rate")

        NotificationCenter.default.removeObserver(self,
                                                  name: .AVPlayerItemDidPlayToEndTime,
                                                  object: self.player?.currentItem)

        NotificationCenter.default.removeObserver(self,
                                                  name: .AVPlayerItemFailedToPlayToEndTime,
                                                  object: self.player?.currentItem)

        self.player = nil
    }



    @objc func itemDidPlayToEndTime(_ notification: NSNotification) {
        guard self.repeat == .loop else {
            return
        }
        self.player?.seek(to: .zero)
        self.player?.play()
    }

    @objc func itemFailedToPlayToEndTime(_ notification: NSNotification) {
        self.teardown()
    }


    open override func observeValue(forKeyPath keyPath: String?,
                                          of object: Any?,
                                          change: [NSKeyValueChangeKey : Any]?,
                                          context: UnsafeMutableRawPointer?) {
        if keyPath == "status", let status = self.player?.currentItem?.status, status == .failed {
            self.teardown()
        }

        if
            keyPath == "rate",
            let player = self.player,
            player.rate == 0,
            let item = player.currentItem,
            !item.isPlaybackBufferEmpty,
            CMTimeGetSeconds(item.duration) != CMTimeGetSeconds(player.currentTime())
        {
            self.player?.play()
        }
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我为您制作了一个示例项目，说实话，我的视图控制器很简单。 它演示了图像拾取和视频捕获功能。 ❤️