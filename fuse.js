const { FuseBox, WebIndexPlugin, CSSModules, CSSPlugin, SassPlugin, PostCSSPlugin } = require("../../.dev");
const fuse = FuseBox.init({
    homeDir : "src",
    output : "dist/$name.js",
    target : "browser",
    sourceMaps : true,
    plugins : [
        WebIndexPlugin(),
        [SassPlugin(), CSSModules(), CSSPlugin()]
    ]
});
fuse.dev();

fuse.bundle("app")
    .watch()
    .hmr()
    .instructions(" > index.ts");
fuse.run();