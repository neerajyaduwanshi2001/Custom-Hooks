export async function getServerSideProps({ request, params }) {
    // console.log("params",params)
    const { serviceId } = params;
    console.log("asdfs", serviceId);
    const info = await getServiceByUserId({ serviceId: serviceId });
    console.log("asdfs", info.data[0].TrainerDetails);
  
    // const serv = await axios.post(`${Host}api/serviceById_withoutToken`, { id: serviceId })
    // const comment = await axios.post(`${Host}api/getItemCommentsById`, { commentFor: 'service', itemId: serviceId });
    // const fservices = await axios.get(`${Host}api/getAllFeaturedServices`);
    // const fprod = await axios.get(`${Host}api/getAllFeaturedProducts`);
    return {
      props: {
        service: info.data[0],
        // comments: comment.data.data,
        // fserv: fservices.data.data,
        // fproduct: fprod.data.data
      },
    };
  }
  Footer