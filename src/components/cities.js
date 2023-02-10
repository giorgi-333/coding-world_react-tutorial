

function Cities() {
    const citiesList = ['თბილისი',"ქუთაისი","სამტრედია","რუსთავი","ჭიათურა","ზუგდიდი","თიანეთი"]
    return(
        <div> 
            <ul>
                {
                    citiesList.map(item => (
                        <li>{item}</li>
                    ))
                }
                
            </ul>
        </div>
    );
}

export default Cities;