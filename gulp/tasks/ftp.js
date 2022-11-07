import { configFTP } from '../config/ftp.js'
import vinylFTP from 'vinyl-ftp'
import util from 'gulp-util'
import FtpConnection from 'vinyl-ftp'
export const htp = () => {
    configFTP.log = util.log
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FTP",
            message: "Error: <%= error.message %>"
            }))
        )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
}