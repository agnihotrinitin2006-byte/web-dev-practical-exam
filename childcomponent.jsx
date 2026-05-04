function ChildComponent({name,age,hobby}){
    return(
        <div>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Hobby:{hobby.join(",")}</p>
        </div>
    )
}
export default ChildComponent