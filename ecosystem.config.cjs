module.exports = {
  apps: [
    {
      name: 'onepos-web',
      cwd: '/www/wwwroot/onepos.vn',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -H 0.0.0.0 -p 3000',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
        HOSTNAME: '0.0.0.0',
      },
    },
  ],
};
