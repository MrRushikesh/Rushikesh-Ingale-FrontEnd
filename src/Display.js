import React from 'react';


const Display = (props) => {
    // console.log(props)

   const renderProduct = ({prodData}) => {
        if(prodData){
            if(prodData.length > 0){
                    return prodData.map((item) => {
                        return(
                            <>
                            <p style={{fontSize:'40px',fontWeight:'bold'}}>Search Results -: </p>
                            <div className="panel-group" key={item._id}>
                                <div className="panel panel-primary">
                                <p className="panel-heading mainHeading">{item.name}</p>
                                <p className="panel-body tagline">{item.ads[1].headline}</p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="thumbnail">
                                                <img src={item.ads[3].imageUrl} alt="Not Available" style={{width:'100%', height:'400px'}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="thumbnail">
                                                <p className="heading">{item.name}</p>
                                                <p className="headline"><i>{item.ads[1].headline}</i></p>
                                                <p className="primaryText"><i>{item.ads[0].primaryText}</i></p>
                                                <p className="desc"><b>Description -: </b>{item.ads[4].description}</p><br/>
                                                <a href={item.url}  target="_blank"><button className="btn btn-primary btnsize">{item.ads[2].CTA}</button></a>
                                            </div>  
                                        </div>
                                    </div>
                                </div>     
                            </div>
                            </>
                        )
                    })
                }else{
                    return(
                        <>
                            <div className="panel-group" style={{textAlign:'center'}}>
                                <p style={{fontSize:'40px',fontWeight:'bold'}}>No Data Found As Per Your Search</p>
                            </div>
                        </>
                    )
                }
                }else{
                    return(
                        <>
                        <p style={{fontSize:'30px',fontWeight:'bold'}}>For Result Plese First Enter Text in Search Box -: </p>
                        <div className="panel-group" style={{textAlign:'center'}}>
                            <img src="/images/loader.gif" alt="loader"/>
                            <p style={{fontSize:'40px',fontWeight:'bold'}}>Loading....</p>
                        </div>
                        </>
                    )
                }
            }


    return(
       <> 
        <div className="container">
            {renderProduct(props)}
        </div>
   </>
    )
}

export default Display;