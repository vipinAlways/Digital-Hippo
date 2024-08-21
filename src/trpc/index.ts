import { publicProcedure, router } from "./trpc";

export const apprRuter =router({
 anyApiRoute :publicProcedure.query(()=>"hello")
})
