import React from 'react'
import SubBody from './SubBody'
import LastBody from './LastBody'

export default function Body() {
    return (
        <div>
            <SubBody no={1} reviewNo={9.8} reviewText={"Exceptional"} />
            <SubBody no={2} reviewNo={9.5} reviewText={"Excellent"} />
            <SubBody no={3} reviewNo={9.3} reviewText={"Exceptional"} />
            <LastBody reviewNo={9.1} reviewText={"Very Good"} />
        </div>
    )
}
