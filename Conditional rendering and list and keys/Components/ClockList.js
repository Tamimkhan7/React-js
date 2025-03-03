import clock from "../clock";

//if when my array was empty that's time, my array either didn't show run time error, if atleast one array was found
export default function ClockList({ quantities = [] }) {
    return (
        //we use array map for range based array, we can execute an array for find each element of the array       


        // <div>
        //         {
        //for each array element of the key value we can use,,but key is not unique value that's why we don't use it for identifier

        // quantities.map((key) => (
        //     <clock key={key} />
        // ))}

        //now we can use math.random for unickly identifier
        //             quantities.map(() => (
        //                 <clock key={Math.random()} />
        //             ))}
        //     </div >
        <>
            <div>
                {
                    // now we can use key value for identifier, that's not happer any occure 
                    quantities.map((key) => (
                        <clock key={key} />
                    ))}
            </div >

            <div>
                {
                    // now we can use key value for identifier, that's not happer any occure 
                    quantities.map((key) => (
                        <clock key={key} />
                    ))}
            </div >
        </>
    );
}