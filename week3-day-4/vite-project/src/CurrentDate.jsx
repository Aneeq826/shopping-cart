function CurrentDate(){
    const currentDate=new Date();
    const day=currentDate.getDate();
    const month=currentDate.getDate()+1;
    const year=currentDate.getYear();
    return (
        <>
        <h1> Date and time</h1>
        <h1>{currentDate.toString()}</h1>
        <h1>Date: {currentDate.toDateString()}</h1>
        <h1>Time: {currentDate.toTimeString()}</h1>
        <h2>Day: {day}</h2>
        <h2>Month: {month}</h2>
        <h2>Year: {year}</h2>
        </>
    )
}
export default CurrentDate