import SidebarCollapsible from "./SideBarCollapsible";


export default function Testing() {
    return (
        <SidebarCollapsible sidebarHeader={<h3 className="pt-4">Options & History</h3>} sidebar={<>
            <p>
                Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
            </p>
        </>}>
            <>
                <h3>Main content</h3><br />
                <p>
                    Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                </p><br />
                <p>
                    Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                </p><br />
                <p>
                    Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
                </p>
            </>
        </SidebarCollapsible>);
}