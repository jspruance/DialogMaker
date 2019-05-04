import React from 'react'

export default function HomeContent() {
  return (
    <section className="container home-content">
        <div className="columns features text-align-left">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Create dialogs</h4>
                            <p>Use the Dialog Maker's UI to easily and conveniently compose dialogs for your bots.</p>
                            <p><a href="/about">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-image has-text-centered">
                        <i className="fa fa-empire"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Easy integration</h4>
                            <p>Export your dialog and drop it into your bot project's 'dialogs' folder.</p>
                            <p><a href="/about">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-apple"></i>
                    </div>
                     <div className="card-content">
                        <div className="content">
                            <h4>Save your dialogs</h4>
                            <p>Create an account and save your dialogs to your own personal dialogs library.</p>
                            <p><a href="/about">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
