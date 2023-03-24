import React from "react"

export default function HeaderRSVP() {
    return (

        <form
            name="contact"
            method="post"
            class="mt-4"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field">

            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
                <input name="bot-field" />
            </div>
            <div class="form-row">
                <div class="col-md-4 mb-2">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" class="form-control" id="fullName" placeholder="John Doe" required />
                    <div class="invalid-feedback">
                        Please enter a name!
                    </div>
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" class="form-control" id="email" placeholder="JohnDoe@gmail.com" required />
                    <div class="invalid-feedback">
                        Please enter an email!
                    </div>
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="phone">Phone: 123-456-7890</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" class="form-control" id="phone" placeholder="714-123-1234" required />
                    <div class="invalid-feedback">
                        Please provide a working phone number.
                    </div>
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" class="form-control" id="country" placeholder="Canada/US" />
                </div>
                <div class="col-md-4 mb-2">
                    <label htmlFor="address">Full Address</label>
                    <input type="text" name="address" class="form-control" id="address" placeholder="12345 Fake Street, Imaginary City CA 92683" />
                </div>
                <div class="col-md-6 mb-2">
                    <label htmlFor="party">Names of People in Party</label>
                    <textarea type="text" name="party" class="form-control" id="party" placeholder="John Nguyen, Susie Nguyen, Brittany Truong" />
                </div>
                <div class="col-md-6 mb-2">
                    <label htmlFor="comment">Comments and Blessings</label>
                    <textarea type="text" name="comment" class="form-control" id="comment" placeholder="Dear Chris and Uyenie, you guys are awesome. We are grateful to have you in our lives. -Love, the best relative ever :)" />
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
    )
}