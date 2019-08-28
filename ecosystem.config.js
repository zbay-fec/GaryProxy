module.exports = {
  apps: [
    {
      name: "proxy",
      script: "./server/server.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-13-58-160-221.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/Zbay.pem",
      ref: "origin/master",
      repo: "https://github.com/zbay-fec/GaryProxy.git",
      path: "/home/ubuntu/ZbayProxy",
      "post-deploy":
        "npm install && npx webpack --mode production && pm2 startOrRestart ./ecosystem.config.js"
    }
  }
};