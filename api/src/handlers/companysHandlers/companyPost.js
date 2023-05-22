const errorUser = require('../../helpers/errors');
const { postCompany } = require('../../controllers/CompaniesController/CompanyControllerPost');

const companysHandlerPost = async(req, res) =>{
    const { name, business_name, ruc, cuit, country, email, password, registed } = req.body
    try {
        res.status(200).json(await postCompany(name, business_name, ruc, cuit, country, email, password, registed));
    } catch (error) {
        errorUser(error, res);      
    }
}

module.exports={
    companysHandlerPost
}