var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserSyncDir = "../browser-sync/";


// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: browserSyncDir
        }
    });

    gulp.watch([browserSyncDir + "/**/*"]).on("change", browserSync.reload);
});

// 代理服务器
gulp.task("browser-sync-proxy", function() {
    browserSync.init({
        server: {
            proxy: "127.0.0.1:8100/index.html"
        }
    });

    gulp.watch([browserSyncDir + "/**/*"]).on("change", browserSync.reload);
});