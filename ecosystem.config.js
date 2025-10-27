module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000 -H 0.0.0.0",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
