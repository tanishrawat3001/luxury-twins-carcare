const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "info@luxurytwinscarcare.com",
    password: "Deepak@122001",
    host: "ftp.adminyogi.com",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/",
    include: ["*", "**/*"],
    exclude: [],
    deleteRemote: false,
    forcePasv: true,
    sftp: false,
};

console.log("Starting deployment to ftp.adminyogi.com...");

ftpDeploy
    .deploy(config)
    .then((res) => console.log("Deployment finished successfully!"))
    .catch((err) => {
        console.error("Deployment failed:", err);
        process.exit(1);
    });

ftpDeploy.on("uploading", function (data) {
    console.log(`Uploading [${data.transferredFileCount}/${data.totalFilesCount}]: ${data.filename}`);
});
