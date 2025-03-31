/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        port: "",
        pathname: "/plus-assets/img/component-images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
