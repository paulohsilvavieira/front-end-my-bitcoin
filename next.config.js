const nextConfig = {

  reactStrictMode: true,
  eslint: {
    dirs: ['src']
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/home',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
