import React from 'react'

function ComonSecation(props) {
    return (
        <div>
            <section className='bg-warning py-5'>
                <div className='container-fluid py-5'>
                    <div className='row'>
                        <div className='col-lg-12 '>
                            <div className='text-center'>
                                <h1 className='fw-bold'>{props.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ComonSecation