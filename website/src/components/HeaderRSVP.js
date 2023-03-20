import React from "react"

export default function HeaderRSVP() {
    return (

        <form name="contact" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
                <input name="bot-field" />
            </div>
            <p classname="rsvpcomment">
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Phone <input type="phone" name="phone" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Party Size<input type="plusone" name="plusone" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Comments <input type="comment" name="comment" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}