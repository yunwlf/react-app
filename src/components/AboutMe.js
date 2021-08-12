import React from 'react'

const AboutMe = () => {
    return (
        <div style={{marginTop : '50px'}}>
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card" style={{width: '18rem'}}>
                            <div class="card-body">
                                <h5 class="card-title">About Me</h5>
                                <p class="card-text">Halo</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1">
                    </div>
                    <div class="col-sm-8">
                        <div class="card" style={{width: '100%'}}>
                            <div class="card-body">
                                <h5 class="card-title">Biodata</h5>
                                <table class="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                        <td>Nama</td>
                                        <td>Aji</td>
                                        </tr>
                                        <tr>
                                        <td>Tanggal Lahir</td>
                                        <td>2 Agustus 1998</td>
                                        </tr>
                                        <tr>
                                        <td>Alamat</td>
                                        <td>Jl.Inpres 18</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
