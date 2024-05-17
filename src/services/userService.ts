import { Prisma } from "@prisma/client";
import CustomErrorException from "../exceptions/CustomErrorException";
import { prisma } from "../libs/prisma";

type CreateUserProps = {
    name: string;
    email: string;
}
export const userService = {
    list: async (req: any, res: any) => {
        try{

            const users = await prisma.user.findMany({});
            if(!users){
                throw new CustomErrorException('Ops! não foram encontrados registros!!!', 500);
            }

            return users;
        }catch(error:any){
            throw new CustomErrorException(`Error: ${error}`, 500);
        }
        
    },
    create: async (data: Prisma.UserCreateInput) => {
        try{
            const user = await prisma.user.create({ data });
            if(!user){
                throw new CustomErrorException('Ops!, Não foi possivel cadastrar registro!!!', 500);
            }
            return user;
        }catch(error:any){
            throw new CustomErrorException('Erro de Servidor', 500);
        }    
    }
};
