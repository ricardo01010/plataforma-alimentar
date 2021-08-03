function tempo(request, response){
    const dynamicDate = new Date();
    const envTesteApi = process.env.TESTE_VAR_AMBIENTE;

    response.json({
        date: dynamicDate.toGMTString(),
        varEnv: envTesteApi
    });
}

export default tempo;