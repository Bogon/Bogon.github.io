---
title: Swift 5使用UIImagePickerController拾取图像
description: Swift 5使用UIImagePickerController拾取图像
permalink: Swift 5使用UIImagePickerController拾取图像
copyright: ture
date: 2020-04-28 15:22:56
keywords: iOS,Swift,UIImagePickerController,用户体验,拾取图像
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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解如何使用 ```Swift 5``` 中的 ```UIImagePickerController``` 类从照片库或直接从相机获取图像。

> **```提示:```**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你还在寻找视频选择器吗？ 🍿查看我的另一篇有关在 [***```《iOS中选择和播放视频文件》```***](http://www.xuebaonline.com/Swift%20%E9%80%89%E6%8B%A9%E5%92%8C%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91/ "") 的文章。

</br>

# **适用于iOS的可重用图像选择器类**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，在本教程中，我们将创建一个在 ```UIKit``` 之上构建的可重用类，以使图像选择对于你的应用程序而言更加愉悦，所有内容均以 ```Swift 5``` 编写。

<!-- more -->

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本文的灵感来自于我以前尝试以面向协议的方式解决图像拾取问题，但是如今该文章有些过时，而且我不再使用该技术。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人们总是从过去中学到东西，所以这次我不使用面向协议的方法，而只是使用 ```ImagePicker``` 类。 没有单例，没有额外的库，只有一个可以在适当位置实例化的小型帮助程序类可以完成它的工作。 🌄

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我只专注于选择编辑后的图像，如果你想使用实时照片或电影，则始终可以自定义 ```ImagePicker``` 类，或创建一个抽象类并为每种媒体类型实现子类。 我也会这样做。 😅


因此，让我们深入研究。

</br>

# **获取隐私权限**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如今，隐私非常重要，因此你必须在应用程序 ```Info.plist``` 文件中添加两个重要的键，否则最终将导致可怕的崩溃！ ⚠️

![Info.plist](http://cdn.xuebaonline.com/uc-stp1.jpg "")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于你要获取一些私人数据，因此必须向用户（和 ```Apple``` ）提供说明消息，说明该应用为何要求访问相机和照片库。  ```NSCameraUsageDescription``` 用于相机， ```NSPhotoLibraryUsageDescription``` 键用于照片库访问。 这两个值都应该是一个简单的字符串，该字符串将向用户解释你为什么需要他/她的裸照。 谨慎很重要！ 🔒

``` Swift
<key>NSCameraUsageDescription</key>
<string>This app wants to take pictures.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>This app wants to use your photos.</string>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;显然，如果你想使用直接从相机拍摄的照片，但又不想访问照片库，则只需添加适当的密钥即可。 就是这样，现在我们准备进行一些实际的编码。 ⌨️


</br>

# **剖析 UIImagePickerController**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```UIPickerController``` 的结构非常简单。 基本上，它是一个常规的视图控制器，你只需设置一些额外的属性即可使其工作。

``` Swift
let pickerController = UIImagePickerController()
pickerController.delegate = self
pickerController.allowsEditing = true
pickerController.mediaTypes = ["public.image", "public.movie"]
pickerController.sourceType = .camera
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;允许编辑是一个标志，指示在选择和拍照后是否应显示调整大小和裁剪界面，如果为 ```true``` ，则应使用 ```.editedImage``` 而不是 ```.originalImage``` 键（在选择器委托中），以从中获取正确的图像。图片信息字典。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本上有两种媒体类型可用：图像和电影。你可以通过在选择器上调用类方法来获取每种源类型的可用媒体类型字符串： ```UIImagePickerController.availableMediaTypes（for：.camera）```。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共有3种可用的源类型：```.camera```（即相机），还有另外两个选项可从照片库中获取图片。 ```.photoLibrary``` 枚举例将为你提供完全访问权限，但如果选择 ```.savedPhotosAlbum``` ，则只能限制相机胶卷的选择范围。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该委托应同时实现 ```UIImagePickerControllerDelegate``` 和 ```UINavigationControllerDelegate``` 协议，但是通常我的导航控制器委托只是一个空的实现。如果你需要额外的导航相关逻辑，则可能还需要在其中创建一些方法。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;噢，让我们把所有东西放在一起...

``` Swift
import UIKit

public protocol ImagePickerDelegate: class {
    func didSelect(image: UIImage?)
}

open class ImagePicker: NSObject {

    private let pickerController: UIImagePickerController
    private weak var presentationController: UIViewController?
    private weak var delegate: ImagePickerDelegate?

    public init(presentationController: UIViewController, delegate: ImagePickerDelegate) {
        self.pickerController = UIImagePickerController()

        super.init()

        self.presentationController = presentationController
        self.delegate = delegate

        self.pickerController.delegate = self
        self.pickerController.allowsEditing = true
        self.pickerController.mediaTypes = ["public.image"]
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

        if let action = self.action(for: .camera, title: "Take photo") {
            alertController.addAction(action)
        }
        if let action = self.action(for: .savedPhotosAlbum, title: "Camera roll") {
            alertController.addAction(action)
        }
        if let action = self.action(for: .photoLibrary, title: "Photo library") {
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

    private func pickerController(_ controller: UIImagePickerController, didSelect image: UIImage?) {
        controller.dismiss(animated: true, completion: nil)

        self.delegate?.didSelect(image: image)
    }
}

extension ImagePicker: UIImagePickerControllerDelegate {

    public func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        self.pickerController(picker, didSelect: nil)
    }

    public func imagePickerController(_ picker: UIImagePickerController,
                                      didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {
        guard let image = info[.editedImage] as? UIImage else {
            return self.pickerController(picker, didSelect: nil)
        }
        self.pickerController(picker, didSelect: image)
    }
}

extension ImagePicker: UINavigationControllerDelegate {

}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你不需要从源类型中进行选择，那么事情就非常简单了，你只需展示你的选择器视图控制器，处理委托中的所有内容即可。 但是，如果你需要从输入源中进行选择，那会涉及更多的逻辑，尤其是在 ```iPad``` 上。 📱

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我正在使用 ```UIAlertController``` 来组成源类型选择对话框。 我试图添加3个动作（基于选择源类型），但前提是该源类型在给定设备上可用（例如，```.camera``` 在模拟器中不可用）。 你可以通过以下方式检查可用性：```UIImagePickerController.isSourceTypeAvailable（type）``` 。

> ***```提示:```***\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```UIAlertController``` 在 ```iPad``` 上需要一些额外的东西，这就是为什么我要在本方法中设置 ```popoverPresentationController``` 属性的原因。 通常只需设置 ```sourceView``` 和 ```sourceRect``` 属性即可，但是你也可以自定义箭头方向。 ⬅️➡️⬆️⬇️


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检查设备是否为 ··· 并设置正确的源代码视图并根据需要进行调整一直是你的任务，否则你的应用将在 ```iPad``` 上崩溃。 另一件事是，在选择器完成工作后，你必须弹出 ··· ！ ⚠️

</br>

# **如何使用图像选择器类？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;好了，现在你可以拍照了。 我做了一个简单的视图控制器，向你展示了一个真正的快速示例。 你只需要一个 ```UIImageView``` 和一个 ```UIButton``` 。

![UIImageView](http://cdn.xuebaonline.com/uc-stp2-1.jpg "")


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在，这是示例视图控制器的代码。 没什么了不起的，我只是将控制器作为 ```ImagePicker``` 的 ```presentationController``` 进行传递，因此它可以在此之上呈现 ```UIImagePickerController``` 。 我将代表从表示控制器中分离出来，因为有时会派上用场。 🤷‍♂️

``` Swift
class ViewController: UIViewController {

    @IBOutlet var imageView: UIImageView!

    var imagePicker: ImagePicker!

    override func viewDidLoad() {
        super.viewDidLoad()

        self.imagePicker = ImagePicker(presentationController: self, delegate: self)
    }

    @IBAction func showImagePicker(_ sender: UIButton) {
        self.imagePicker.present(from: sender)
    }
}

extension ViewController: ImagePickerDelegate {

    func didSelect(image: UIImage?) {
        self.imageView.image = image
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这种情况下， ```ImagePickerDelegate``` 委托是我能想到的最简单的委托。 它只是给出选择的图像，因此你可以使用它。 但是，在某些情况下，你可能需要图像选择器提供一些附加信息。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果你想进一步采取这种方法，则可以创建定义基本功能的抽象类或协议，并在此基础上实现各种媒体选择器控制器以满足你的需求。







