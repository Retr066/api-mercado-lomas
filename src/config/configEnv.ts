import "dotenv/config"

const configENV= {
    PORT: process.env.PORT || 3000,
    MONGO_USER: process.env.MONGO_USER || "admin",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
}

export default configENV