import React from 'react';

const Table = ({finalResult}) => {
        return (
            <div className='table-responsive mt-5'>
                <table className="table table-hover table-success table-striped">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Password</td>
                            <td>ConfirmPassword</td>
                        </tr>
                        <tr>
                            <td>{finalResult.FirstName}</td>
                            <td>{finalResult.Email}</td>
                            <td>{finalResult.Phone}</td>
                            <td>{finalResult.Password}</td>
                            <td>{finalResult.ConfirmPassword}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
};

export default Table;