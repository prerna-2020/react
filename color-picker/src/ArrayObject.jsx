import {  useMemo, useState } from "react";

function ArrayObject() {

    const [cars, setCars] = useState([{model:2025, name:'Ford', type:'Hybrid'},
                                        {model:2020, name:"Maruti", type:'Automatic'},
                                        {model:1990, name:'Honda', type:'Manual'}
                                    ]);

    const listItem = useMemo(() => {
       return cars.map((item, key)=>{
            console.log("item", item);
           return( 
            <dl key={key}>
                <dt>{item.name}</dt>
                <dd>{item.type}, {item.model}</dd>
            </dl>
           )
        });   
      }, [cars]);

    const [carName, setCarName] = useState('');
    const [carModel, setCarModel]  = useState(1870);
    const [carType, setCarType] = useState('');

    const addDetails= () => {
        let obj = {};
       console.log(carModel,carName, carType);

        if(carType!='' && carName!=''){
            obj = {model:carModel,name:carName,type:carType};
            setCars([...cars,obj]);
        }else{
            console.log("enter all values");
        }

        //Reset form fields
        setCarModel(1870);
        setCarName('');
        setCarType('');
    }

    return ( 
    <>
    <div className="main">     
        <div className="listBlock">
            {listItem}  
        </div>
        <div className="inputBlk">
            <input type="number" name="model" id="model"  min="1870" max="2025" value={carModel} onChange={(e)=>setCarModel(e.target.value)}required/>
            <input type="text" name="name" id="name" value={carName} onChange={(e)=>setCarName(e.target.value)} required/>
            <select name="type" id="type"  value={carType} onChange={(e)=>setCarType(e.target.value)} required>
                <option value="">Select Car Type</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
                <option value="Hybrid">Hybrid</option>
            </select>

            <button type="submit" onClick={addDetails}>Add Car Details</button>
        </div>     
    </div>
    </>
    );
}

export default ArrayObject;