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

