import React from "react"

export default function HeaderRSVP() {
    return (

        <form 
        name="contact v1" 
        method="post" 
        class="mt-4" 
        data-netlify="true"
        onSubmit="submit" >

        <input type="hidden" name="form-name" value="contact v1"/>
            <div class="form-row">
                <div class="col-md-4 mb-2">
                    <label htmlFor="fullName">Full Name</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="fullName" placeholder="John Doe" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="email">Email</label>
                    <div class="input-group">
                        <input type="email" class="form-control" id="email" placeholder="JohnDoe@gmail.com" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="phone">Phone</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="phone" placeholder="(714)123-1234" required />
                        <div class="invalid-feedback">
                            Please provide a working phone number.
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="numGuests">Number of Guests</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="numGuests" placeholder="Number of Guests" required />
                        <div class="invalid-feedback">
                            Please let us know the size of your party.
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="country">Country</label>
                    <input type="text" class="form-control" id="country" placeholder="Canada/US" />
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="address">Full Address</label>
                    <input type="text" class="form-control" id="address" placeholder="12345 Fake Street, Imaginary City CA 92683" />
                </div>
                <div class="form-row">
                    <div class="col-md-10 mb-2">
                        <label htmlFor="comment">Comments and Blessings</label>
                        <div class="input-group">
                            <textarea type="text" class="form-control" placeholder="Dear Chris and Uyenie, you guys are awesome. We are grateful to have you in our lives. -Love, the best relative ever :)" />
                            <div class="valid-feedback">
                                Thank you!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
    )
}