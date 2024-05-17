import CustomErrorException from '../exceptions/CustomErrorException';
import { userService } from '../services/userService';

export const userController = () => ({

    list: async (req: any, res: any) => {
        try{
            const result = await userService.list(req, res);
            if(!result){
                return res.status(500).json('Ops!, Registros não foram encontrados');
            }
            return res.status(200).json(result);
        }catch(error:any){
            throw new CustomErrorException('An error occurred while processing the request.', 500);
        }
    },
    create: async(req: any, res: any) => {
        try{
          
            const result = await userService.create({
                name: 'Teste', 
                email: 'teste@gmail.com'
            });
            if(!result){
                res.json.status(500)('Ops Registro não cadastrado!!!');
            }
            return res.status(200).json(result);

        }catch(error: any){
            res.json.status(500)(`Error: ${error}`);
        }
    }

})