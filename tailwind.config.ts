import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/images/**/*.{js,ts,jsx,tsx,mdx}",
        // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                footerCallcenter: "url('https://sui.ssgcdn.com/ui/m_ssg/img/v2/sp_footer.png')",
                "login-icon": "url(https://sui.ssgcdn.com/ui/m_ssg/img/sp_cmem_login.png)",
                "top-icon": "url('https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/sp_top_cate.png')",
                "sns-icon": "url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_cmemlogin_cico_20230912@2x.png')",
            },
            fontFamily: {
                Pretendard: ["Pretendard"],
            },
        },
    },
    plugins: [],
};
export default config;
