import React from "react"

export default function HeaderRSVP() {
    return (

        <form name="contact" class="mt-4" data-netlify="true">
            <input type="hidden" name="contact" value="contact" />
            <div hidden>
                <input name="bot-field" />
            </div>

            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="validationCustom01">Full Name</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="fullName" placeholder="John Doe" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="numGuests">Number of Guests</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="numGuests" placeholder="Number of Guests" required />
                        <div class="invalid-feedback">
                            Please let us know the size of your party.
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="country">Country</label>
                    <input type="text" class="form-control" id="country" placeholder="Canada/US" />
                </div>
                <div class="col-md-4 mb-3">
                    <label for="address">Full Address</label>
                    <input type="text" class="form-control" id="address" placeholder="12345 Fake Street, Imaginary City CA 92683" />
                </div>
                <div class="form-row">
                    <div class="col-md-10 mb-10">
                        <label for="comment">Comments and Blessings</label>
                        <div class="input-group">
                            <input type="text" height="150px" font-size="14pt" class="form-control" id="comment" placeholder="Dear Chris and Uyenie, you guys are awesome. We are grateful to have you in our lives. -Love, the best relative ever :)" />
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