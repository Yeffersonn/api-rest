
import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "us-east.connect.psdb.cloud";
export const DB_USER = process.env.DB_USER || "91newk4vi168k5ymsi8m";
export const DB_PASSWORD = process.env.DB_PASSWORD || "	pscale_pw_toxvjspExd7hDUcsWzN5sVkKWN3BdvY1KhbHoKr7p1p";
export const DB_DATABASE = process.env.DB_DATABASE || "employee";
export const DB_PORT = process.env.DB_PORT || 3306;