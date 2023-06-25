module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: "/about",
                destination: "/faq",
                permanent: true,
            },
            {
                source: "/perguntas",
                destination: "/faq",
                permanent: true,
            },
            {
                source: "/home",
                destination: "/",
                permanent: true,
            },
        ]
    },
}