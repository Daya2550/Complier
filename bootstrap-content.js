// Complete Bootstrap 5.3 Documentation Content
const bootstrapContent = {
    alerts: {
        title: "Alerts",
        subtitle: "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
        breadcrumb: ["Components", "Alerts"],
        content: `
            <div class="example-container">
                <div class="example-header">
                    <span>Basic Alerts</span>
                    <button class="btn-copy" onclick="copyCode('basic-alerts')"><i class="fas fa-copy"></i> Copy</button>
                </div>
                <div class="example-content">
                    <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
                    <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
                    <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
                    <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
                    <div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
                    <div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
                    <div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
                    <div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
                </div>
                <div class="code-container">
                    <div class="code-content">
                        <pre id="basic-alerts">&lt;div class="alert alert-primary" role="alert"&gt;A simple primary alert—check it out!&lt;/div&gt;
    &lt;div class="alert alert-secondary" role="alert"&gt;A simple secondary alert—check it out!&lt;/div&gt;
    &lt;div class="alert alert-success" role="alert"&gt;A simple success alert—check it out!&lt;/div&gt;
    &lt;div class="alert alert-danger" role="alert"&gt;A simple danger alert—check it out!&lt;/div&gt;
    &lt;div class="alert alert-warning" role="alert"&gt;A simple warning alert—check it out!&lt;/div&gt;
    &lt;div class="alert alert-info" role="alert"&gt;A simple info alert—check it out!&lt;/div&gt;
    &lt;div class="alert alert-light" role="alert"&gt;A simple light alert—check it out!&lt;/div&gt;
    &lt;div class="alert alert-dark" role="alert"&gt;A simple dark alert—check it out!&lt;/div&gt;</pre>
                    </div>
                </div>
            </div>
            
            <div class="example-container">
                <div class="example-header">
                    <span>Dismissible Alerts</span>
                    <button class="btn-copy" onclick="copyCode('dismissible-alerts')"><i class="fas fa-copy"></i> Copy</button>
                </div>
                <div class="example-content">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="code-container">
                    <div class="code-content">
                        <pre id="dismissible-alerts">&lt;div class="alert alert-warning alert-dismissible fade show" role="alert"&gt;
      &lt;strong&gt;Holy guacamole!&lt;/strong&gt; You should check in on some of those fields below.
      &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
    &lt;/div&gt;</pre>
                    </div>
                </div>
            </div>
    
            <div class="quick-actions">
                <button class="btn btn-primary" onclick="insertToParent(getBootstrapAlerts())">
                    <i class="fas fa-plus"></i> Insert Alert Code
                </button>
                <button class="btn btn-outline-primary" onclick="showContent('badge')">
                    <i class="fas fa-certificate"></i> Show Badges
                </button>
            </div>
        `
    }
,badges: {
    title: "Badges",
    subtitle: "Documentation and examples for badges, our small count and labeling component.",
    breadcrumb: ["Components", "Badge"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Contextual Badges</span>
                <button class="btn-copy" onclick="copyCode('contextual-badges')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <span class="badge bg-primary">Primary</span>
                <span class="badge bg-secondary">Secondary</span>
                <span class="badge bg-success">Success</span>
                <span class="badge bg-danger">Danger</span>
                <span class="badge bg-warning text-dark">Warning</span>
                <span class="badge bg-info text-dark">Info</span>
                <span class="badge bg-light text-dark">Light</span>
                <span class="badge bg-dark">Dark</span>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="contextual-badges">&lt;span class="badge bg-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-secondary"&gt;Secondary&lt;/span&gt;
&lt;span class="badge bg-success"&gt;Success&lt;/span&gt;
&lt;span class="badge bg-danger"&gt;Danger&lt;/span&gt;
&lt;span class="badge bg-warning text-dark"&gt;Warning&lt;/span&gt;
&lt;span class="badge bg-info text-dark"&gt;Info&lt;/span&gt;
&lt;span class="badge bg-light text-dark"&gt;Light&lt;/span&gt;
&lt;span class="badge bg-dark"&gt;Dark&lt;/span&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Badges in Headings</span>
                <button class="btn-copy" onclick="copyCode('heading-badges')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <h1>Example heading <span class="badge bg-secondary">New</span></h1>
                <h2>Example heading <span class="badge bg-secondary">New</span></h2>
                <h3>Example heading <span class="badge bg-secondary">New</span></h3>
                <h4>Example heading <span class="badge bg-secondary">New</span></h4>
                <h5>Example heading <span class="badge bg-secondary">New</span></h5>
                <h6>Example heading <span class="badge bg-secondary">New</span></h6>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="heading-badges">&lt;h1&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h6&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Pill Badges</span>
                <button class="btn-copy" onclick="copyCode('pill-badges')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <span class="badge rounded-pill bg-primary">Primary</span>
                <span class="badge rounded-pill bg-success">Success</span>
                <span class="badge rounded-pill bg-danger">Danger</span>
                <span class="badge rounded-pill bg-warning text-dark">Warning</span>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="pill-badges">&lt;span class="badge rounded-pill bg-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge rounded-pill bg-success"&gt;Success&lt;/span&gt;
&lt;span class="badge rounded-pill bg-danger"&gt;Danger&lt;/span&gt;
&lt;span class="badge rounded-pill bg-warning text-dark"&gt;Warning&lt;/span&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapBadges())">
                <i class="fas fa-plus"></i> Insert Badge Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('breadcrumb')">
                <i class="fas fa-route"></i> Show Breadcrumbs
            </button>
        </div>
    `
}
,breadcrumb: {
    title: "Breadcrumb",
    subtitle: "Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.",
    breadcrumb: ["Components", "Breadcrumb"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Breadcrumb</span>
                <button class="btn-copy" onclick="copyCode('basic-breadcrumb')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="basic-breadcrumb">&lt;nav aria-label="breadcrumb"&gt;
  &lt;ol class="breadcrumb"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Library&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active" aria-current="page"&gt;Data&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Breadcrumb with Custom Divider</span>
                <button class="btn-copy" onclick="copyCode('breadcrumb-divider')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Blog</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Post</li>
                    </ol>
                </nav>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="breadcrumb-divider">&lt;nav style="--bs-breadcrumb-divider: '&gt;';" aria-label="breadcrumb"&gt;
  &lt;ol class="breadcrumb"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Blog&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active" aria-current="page"&gt;Post&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapBreadcrumb())">
                <i class="fas fa-plus"></i> Insert Breadcrumb Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('card')">
                <i class="fas fa-id-card"></i> Show Cards
            </button>
        </div>
    `
}
,card: {
    title: "Card",
    subtitle: "Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.",
    breadcrumb: ["Components", "Card"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Card</span>
                <button class="btn-copy" onclick="copyCode('basic-card')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="card" style="width: 18rem;">
                    <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="basic-card">&lt;div class="card" style="width: 18rem;"&gt;
  &lt;img src="https://via.placeholder.com/286x180" class="card-img-top" alt="..."&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Card title&lt;/h5&gt;
    &lt;p class="card-text"&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Card with Header and Footer</span>
                <button class="btn-copy" onclick="copyCode('header-footer-card')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="card text-center">
                    <div class="card-header">Featured</div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">2 days ago</div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="header-footer-card">&lt;div class="card text-center"&gt;
  &lt;div class="card-header"&gt;Featured&lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Special title treatment&lt;/h5&gt;
    &lt;p class="card-text"&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="card-footer text-muted"&gt;2 days ago&lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Card Layout (Columns)</span>
                <button class="btn-copy" onclick="copyCode('card-columns')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card 1</h5>
                            <p class="card-text">This is a wider card with supporting text.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card 2</h5>
                            <p class="card-text">This card has supporting text below.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card 3</h5>
                            <p class="card-text">This card has even longer text to show equal height.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="card-columns">&lt;div class="row row-cols-1 row-cols-md-3 g-4"&gt;
  &lt;div class="col"&gt;
    &lt;div class="card h-100"&gt;
      &lt;img src="https://via.placeholder.com/400x200" class="card-img-top" alt="..."&gt;
      &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Card 1&lt;/h5&gt;
        &lt;p class="card-text"&gt;This is a wider card with supporting text.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col"&gt;
    &lt;div class="card h-100"&gt;
      &lt;img src="https://via.placeholder.com/400x200" class="card-img-top" alt="..."&gt;
      &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Card 2&lt;/h5&gt;
        &lt;p class="card-text"&gt;This card has supporting text below.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col"&gt;
    &lt;div class="card h-100"&gt;
      &lt;img src="https://via.placeholder.com/400x200" class="card-img-top" alt="..."&gt;
      &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Card 3&lt;/h5&gt;
        &lt;p class="card-text"&gt;This card has even longer text to show equal height.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapCard())">
                <i class="fas fa-plus"></i> Insert Card Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('modal')">
                <i class="fas fa-window-maximize"></i> Show Modal
            </button>
        </div>
    `
}
,modal: {
    title: "Modal",
    subtitle: "Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or custom content.",
    breadcrumb: ["Components", "Modal"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Modal</span>
                <button class="btn-copy" onclick="copyCode('basic-modal')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                This is a basic Bootstrap modal with some content and buttons.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="basic-modal">&lt;!-- Button trigger modal --&gt;
&lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"&gt;
  Launch demo modal
&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h1 class="modal-title fs-5" id="exampleModalLabel"&gt;Modal title&lt;/h1&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        This is a basic Bootstrap modal with some content and buttons.
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapModal())">
                <i class="fas fa-plus"></i> Insert Modal Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('navbar')">
                <i class="fas fa-bars"></i> Show Navbar
            </button>
        </div>
    `
}
,navbar: {
    title: "Navbar",
    subtitle: "Documentation and examples for Bootstrap’s powerful, responsive navigation header — the navbar.",
    breadcrumb: ["Components", "Navbar"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Responsive Navbar</span>
                <button class="btn-copy" onclick="copyCode('responsive-navbar')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="responsive-navbar">&lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
  &lt;div class="container-fluid"&gt;
    &lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
    &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"&gt;
      &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div class="collapse navbar-collapse" id="navbarNav"&gt;
      &lt;ul class="navbar-nav"&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link active" aria-current="page" href="#"&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link" href="#"&gt;Features&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link" href="#"&gt;Pricing&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Dark Themed Navbar</span>
                <button class="btn-copy" onclick="copyCode('dark-navbar')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">DarkNav</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark"
                            aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarDark">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Dropdown</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="dark-navbar">&lt;nav class="navbar navbar-expand-lg navbar-dark bg-dark"&gt;
  &lt;div class="container-fluid"&gt;
    &lt;a class="navbar-brand" href="#"&gt;DarkNav&lt;/a&gt;
    &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark"
      aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation"&gt;
      &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div class="collapse navbar-collapse" id="navbarDark"&gt;
      &lt;ul class="navbar-nav me-auto mb-2 mb-lg-0"&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link active" aria-current="page" href="#"&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item dropdown"&gt;
          &lt;a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false"&gt;Dropdown&lt;/a&gt;
          &lt;ul class="dropdown-menu"&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapNavbar())">
                <i class="fas fa-plus"></i> Insert Navbar Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('toast')">
                <i class="fas fa-bell"></i> Show Toast
            </button>
        </div>
    `
}
,toast: {
    title: "Toasts",
    subtitle: "Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.",
    breadcrumb: ["Components", "Toasts"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Toast</span>
                <button class="btn-copy" onclick="copyCode('basic-toast')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <button type="button" class="btn btn-primary" onclick="showToast()">Show Toast</button>
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src="https://via.placeholder.com/20" class="rounded me-2" alt="...">
                            <strong class="me-auto">Bootstrap</strong>
                            <small>Just now</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, this is a toast message!
                        </div>
                    </div>
                </div>

                <script>
                    function showToast() {
                        const toastEl = document.getElementById('liveToast');
                        const toast = new bootstrap.Toast(toastEl);
                        toast.show();
                    }
                </script>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="basic-toast">&lt;!-- Button to trigger toast --&gt;
&lt;button type="button" class="btn btn-primary" onclick="showToast()"&gt;Show Toast&lt;/button&gt;

&lt;!-- Toast container --&gt;
&lt;div class="toast-container position-fixed bottom-0 end-0 p-3"&gt;
  &lt;div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"&gt;
    &lt;div class="toast-header"&gt;
      &lt;img src="https://via.placeholder.com/20" class="rounded me-2" alt="..."&gt;
      &lt;strong class="me-auto"&gt;Bootstrap&lt;/strong&gt;
      &lt;small&gt;Just now&lt;/small&gt;
      &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="toast-body"&gt;
      Hello, this is a toast message!
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  function showToast() {
    const toastEl = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
&lt;/script&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapToast())">
                <i class="fas fa-plus"></i> Insert Toast Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('tooltip')">
                <i class="fas fa-info-circle"></i> Show Tooltip
            </button>
        </div>
    `
}
,tooltip: {
    title: "Tooltips",
    subtitle: "Documentation and examples for adding custom Bootstrap tooltips powered by Popper.js.",
    breadcrumb: ["Components", "Tooltips"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Tooltip</span>
                <button class="btn-copy" onclick="copyCode('tooltip-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    Hover me
                </button>
            </div>

            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                    tooltipTriggerList.map(function (tooltipTriggerEl) {
                        return new bootstrap.Tooltip(tooltipTriggerEl);
                    });
                });
            </script>

            <div class="code-container">
                <div class="code-content">
                    <pre id="tooltip-basic">&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"&gt;
  Hover me
&lt;/button&gt;

&lt;script&gt;
  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
&lt;/script&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapTooltip())">
                <i class="fas fa-plus"></i> Insert Tooltip Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('popover')">
                <i class="fas fa-comment-dots"></i> Show Popover
            </button>
        </div>
    `
}
,popover: {
    title: "Popovers",
    subtitle: "Add small overlay content like tooltips, but with more markup and support for richer content.",
    breadcrumb: ["Components", "Popovers"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Popover</span>
                <button class="btn-copy" onclick="copyCode('popover-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?">
                    Click to toggle popover
                </button>
            </div>

            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
                    popoverTriggerList.map(function (popoverTriggerEl) {
                        return new bootstrap.Popover(popoverTriggerEl);
                    });
                });
            </script>

            <div class="code-container">
                <div class="code-content">
                    <pre id="popover-basic">&lt;button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title"
  data-bs-content="And here's some amazing content. It's very engaging. Right?"&gt;
  Click to toggle popover
&lt;/button&gt;

&lt;script&gt;
  document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  });
&lt;/script&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapPopover())">
                <i class="fas fa-plus"></i> Insert Popover Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('progress')">
                <i class="fas fa-tasks"></i> Show Progress
            </button>
        </div>
    `
}
,progress: {
    title: "Progress",
    subtitle: "Documentation and examples for using Bootstrap custom progress bars to display progress of tasks.",
    breadcrumb: ["Components", "Progress"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Progress Bar</span>
                <button class="btn-copy" onclick="copyCode('progress-bar-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="progress-bar-basic">&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
    aria-valuemin="0" aria-valuemax="100"&gt;25%&lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Multiple Bars</span>
                <button class="btn-copy" onclick="copyCode('progress-multiple')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40"
                        aria-valuemin="0" aria-valuemax="100">40%</div>
                    <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
                        aria-valuemin="0" aria-valuemax="100">20%</div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="progress-multiple">&lt;div class="progress"&gt;
  &lt;div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40"
    aria-valuemin="0" aria-valuemax="100"&gt;40%&lt;/div&gt;
  &lt;div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20"
    aria-valuemin="0" aria-valuemax="100"&gt;20%&lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Striped and Animated</span>
                <button class="btn-copy" onclick="copyCode('progress-striped')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="progress mb-2">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 75%" aria-valuenow="75"
                        aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                        style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="progress-striped">&lt;div class="progress mb-2"&gt;
  &lt;div class="progress-bar progress-bar-striped" role="progressbar" style="width: 75%" aria-valuenow="75"
    aria-valuemin="0" aria-valuemax="100"&gt;75%&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress"&gt;
  &lt;div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
    style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"&gt;60%&lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapProgress())">
                <i class="fas fa-plus"></i> Insert Progress Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('scrollspy')">
                <i class="fas fa-scroll"></i> Show Scrollspy
            </button>
        </div>
    `
}
,scrollspy: {
    title: "Scrollspy",
    subtitle: "Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active.",
    breadcrumb: ["Components", "Scrollspy"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Scrollspy</span>
                <button class="btn-copy" onclick="copyCode('scrollspy-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">First</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading2">Second</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading3">Third</a>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" style="height: 200px; overflow: auto;">
                    <h4 id="scrollspyHeading1">First heading</h4>
                    <p>Some placeholder content for the first section.</p>
                    <h4 id="scrollspyHeading2">Second heading</h4>
                    <p>Some placeholder content for the second section.</p>
                    <h4 id="scrollspyHeading3">Third heading</h4>
                    <p>Some placeholder content for the third section.</p>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="scrollspy-basic">&lt;nav id="navbar-example2" class="navbar bg-light px-3 mb-3"&gt;
  &lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
  &lt;ul class="nav nav-pills"&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="#scrollspyHeading1"&gt;First&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="#scrollspyHeading2"&gt;Second&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="#scrollspyHeading3"&gt;Third&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" style="height: 200px; overflow: auto;"&gt;
  &lt;h4 id="scrollspyHeading1"&gt;First heading&lt;/h4&gt;
  &lt;p&gt;Some placeholder content for the first section.&lt;/p&gt;
  &lt;h4 id="scrollspyHeading2"&gt;Second heading&lt;/h4&gt;
  &lt;p&gt;Some placeholder content for the second section.&lt;/p&gt;
  &lt;h4 id="scrollspyHeading3"&gt;Third heading&lt;/h4&gt;
  &lt;p&gt;Some placeholder content for the third section.&lt;/p&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapScrollspy())">
                <i class="fas fa-plus"></i> Insert Scrollspy Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('spinners')">
                <i class="fas fa-spinner"></i> Show Spinners
            </button>
        </div>
    `
}
,spinners: {
    title: "Spinners",
    subtitle: "Indicate loading state with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.",
    breadcrumb: ["Components", "Spinners"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Border Spinner</span>
                <button class="btn-copy" onclick="copyCode('spinner-border')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="spinner-border">&lt;div class="spinner-border" role="status"&gt;
  &lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Growing Spinner</span>
                <button class="btn-copy" onclick="copyCode('spinner-grow')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="spinner-grow">&lt;div class="spinner-grow" role="status"&gt;
  &lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Colored Spinners</span>
                <button class="btn-copy" onclick="copyCode('spinner-colored')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="spinner-border text-primary" role="status"></div>
                <div class="spinner-border text-secondary" role="status"></div>
                <div class="spinner-border text-success" role="status"></div>
                <div class="spinner-border text-danger" role="status"></div>
                <div class="spinner-border text-warning" role="status"></div>
                <div class="spinner-border text-info" role="status"></div>
                <div class="spinner-border text-light" role="status"></div>
                <div class="spinner-border text-dark" role="status"></div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="spinner-colored">&lt;div class="spinner-border text-primary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-secondary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-success" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-danger" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-warning" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-info" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-light" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-dark" role="status"&gt;&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapSpinners())">
                <i class="fas fa-plus"></i> Insert Spinner Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('offcanvas')">
                <i class="fas fa-columns"></i> Show Offcanvas
            </button>
        </div>
    `
}
,offcanvas: {
    title: "Offcanvas",
    subtitle: "Build hidden sidebars into your project for navigation, shopping carts, and more using the offcanvas component.",
    breadcrumb: ["Components", "Offcanvas"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Offcanvas Example</span>
                <button class="btn-copy" onclick="copyCode('offcanvas-example')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    Toggle Offcanvas
                </button>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            Some placeholder content. You can place just about any Bootstrap component or custom elements here.
                        </div>
                        <div class="dropdown mt-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="offcanvas-example">&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
  aria-controls="offcanvasExample"&gt;
  Toggle Offcanvas
&lt;/button&gt;

&lt;div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"&gt;
  &lt;div class="offcanvas-header"&gt;
    &lt;h5 class="offcanvas-title" id="offcanvasExampleLabel"&gt;Offcanvas&lt;/h5&gt;
    &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="offcanvas-body"&gt;
    &lt;div&gt;Some placeholder content. You can place just about any Bootstrap component or custom elements here.&lt;/div&gt;
    &lt;div class="dropdown mt-3"&gt;
      &lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"&gt;
        Dropdown
      &lt;/button&gt;
      &lt;ul class="dropdown-menu"&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapOffcanvas())">
                <i class="fas fa-plus"></i> Insert Offcanvas Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('placeholders')">
                <i class="fas fa-magic"></i> Show Placeholders
            </button>
        </div>
    `
}
,placeholders: {
    title: "Placeholders",
    subtitle: "Use loading placeholders for your components or pages to indicate something is still loading.",
    breadcrumb: ["Components", "Placeholders"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Default Placeholder</span>
                <button class="btn-copy" onclick="copyCode('placeholder-default')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p aria-hidden="true">
                    <span class="placeholder col-6"></span>
                </p>
                <a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="placeholder-default">&lt;p aria-hidden="true"&gt;
  &lt;span class="placeholder col-6"&gt;&lt;/span&gt;
&lt;/p&gt;

&lt;a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"&gt;&lt;/a&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Placeholder Colors</span>
                <button class="btn-copy" onclick="copyCode('placeholder-colors')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <span class="placeholder col-12 bg-primary"></span>
                <span class="placeholder col-12 bg-secondary"></span>
                <span class="placeholder col-12 bg-success"></span>
                <span class="placeholder col-12 bg-danger"></span>
                <span class="placeholder col-12 bg-warning"></span>
                <span class="placeholder col-12 bg-info"></span>
                <span class="placeholder col-12 bg-dark"></span>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="placeholder-colors">&lt;span class="placeholder col-12 bg-primary"&gt;&lt;/span&gt;
&lt;span class="placeholder col-12 bg-secondary"&gt;&lt;/span&gt;
&lt;span class="placeholder col-12 bg-success"&gt;&lt;/span&gt;
&lt;span class="placeholder col-12 bg-danger"&gt;&lt;/span&gt;
&lt;span class="placeholder col-12 bg-warning"&gt;&lt;/span&gt;
&lt;span class="placeholder col-12 bg-info"&gt;&lt;/span&gt;
&lt;span class="placeholder col-12 bg-dark"&gt;&lt;/span&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Placeholder Animation</span>
                <button class="btn-copy" onclick="copyCode('placeholder-animations')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p class="placeholder-glow">
                    <span class="placeholder col-12"></span>
                </p>
                <p class="placeholder-wave">
                    <span class="placeholder col-12"></span>
                </p>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="placeholder-animations">&lt;p class="placeholder-glow"&gt;
  &lt;span class="placeholder col-12"&gt;&lt;/span&gt;
&lt;/p&gt;

&lt;p class="placeholder-wave"&gt;
  &lt;span class="placeholder col-12"&gt;&lt;/span&gt;
&lt;/p&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapPlaceholders())">
                <i class="fas fa-plus"></i> Insert Placeholder Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('pagination')">
                <i class="fas fa-angle-double-right"></i> Show Pagination
            </button>
        </div>
    `
}
,pagination: {
    title: "Pagination",
    subtitle: "Indicate a series of related content exists across multiple pages using Bootstrap pagination components.",
    breadcrumb: ["Components", "Pagination"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Pagination</span>
                <button class="btn-copy" onclick="copyCode('pagination-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="pagination-basic">&lt;nav aria-label="Page navigation example"&gt;
  &lt;ul class="pagination"&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;Previous&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Disabled and Active States</span>
                <button class="btn-copy" onclick="copyCode('pagination-states')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="pagination-states">&lt;nav aria-label="..."&gt;
  &lt;ul class="pagination"&gt;
    &lt;li class="page-item disabled"&gt;
      &lt;a class="page-link"&gt;Previous&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item active" aria-current="page"&gt;
      &lt;a class="page-link" href="#"&gt;2&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;
      &lt;a class="page-link" href="#"&gt;Next&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Sizing</span>
                <button class="btn-copy" onclick="copyCode('pagination-sizing')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav aria-label="...">
                    <ul class="pagination pagination-lg">
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                    </ul>
                </nav>
                <nav aria-label="...">
                    <ul class="pagination pagination-sm">
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                    </ul>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="pagination-sizing">&lt;ul class="pagination pagination-lg"&gt;
  &lt;li class="page-item active"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;ul class="pagination pagination-sm"&gt;
  &lt;li class="page-item active"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
  &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapPagination())">
                <i class="fas fa-plus"></i> Insert Pagination Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('modal')">
                <i class="fas fa-window-maximize"></i> Show Modal
            </button>
        </div>
    `
}
,modal: {
    title: "Modal",
    subtitle: "Use Bootstrap modals to add dialogs to your site for lightboxes, user notifications, or custom content.",
    breadcrumb: ["Components", "Modal"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Modal Example</span>
                <button class="btn-copy" onclick="copyCode('modal-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                This is the modal body content.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="modal-basic">&lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"&gt;
  Launch demo modal
&lt;/button&gt;

&lt;div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h5 class="modal-title" id="exampleModalLabel"&gt;Modal title&lt;/h5&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        This is the modal body content.
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapModal())">
                <i class="fas fa-plus"></i> Insert Modal Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('list-group')">
                <i class="fas fa-list-ul"></i> Show List Group
            </button>
        </div>
    `
}
,listgroup: {
    title: "List Group",
    subtitle: "Display a series of content using Bootstrap’s list group component, useful for menus, selectable items, and more.",
    breadcrumb: ["Components", "List group"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic List Group</span>
                <button class="btn-copy" onclick="copyCode('listgroup-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="listgroup-basic">&lt;ul class="list-group"&gt;
  &lt;li class="list-group-item"&gt;An item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;A second item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;A third item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;A fourth item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;And a fifth one&lt;/li&gt;
&lt;/ul&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Active Items</span>
                <button class="btn-copy" onclick="copyCode('listgroup-active')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">The current item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="listgroup-active">&lt;ul class="list-group"&gt;
  &lt;li class="list-group-item active" aria-current="true"&gt;The current item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;A second item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;A third item&lt;/li&gt;
&lt;/ul&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Flush List Group</span>
                <button class="btn-copy" onclick="copyCode('listgroup-flush')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">First item</li>
                    <li class="list-group-item">Second item</li>
                    <li class="list-group-item">Third item</li>
                </ul>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="listgroup-flush">&lt;ul class="list-group list-group-flush"&gt;
  &lt;li class="list-group-item"&gt;First item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;Second item&lt;/li&gt;
  &lt;li class="list-group-item"&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapListGroup())">
                <i class="fas fa-plus"></i> Insert List Group Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('dropdowns')">
                <i class="fas fa-caret-down"></i> Show Dropdowns
            </button>
        </div>
    `
}
,dropdowns: {
    title: "Dropdowns",
    subtitle: "Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.",
    breadcrumb: ["Components", "Dropdowns"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Dropdown</span>
                <button class="btn-copy" onclick="copyCode('dropdown-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="dropdown-basic">&lt;div class="dropdown"&gt;
  &lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Dropdown button
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Dropdown Alignment</span>
                <button class="btn-copy" onclick="copyCode('dropdown-align')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Right-aligned dropdown
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="dropdown-align">&lt;div class="dropdown"&gt;
  &lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Right-aligned dropdown
  &lt;/button&gt;
  &lt;ul class="dropdown-menu dropdown-menu-end"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Dropdown Header & Divider</span>
                <button class="btn-copy" onclick="copyCode('dropdown-header-divider')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Custom Dropdown
                    </button>
                    <ul class="dropdown-menu">
                        <li><h6 class="dropdown-header">Dropdown header</h6></li>
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="dropdown-header-divider">&lt;div class="dropdown"&gt;
  &lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"&gt;
    Custom Dropdown
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;h6 class="dropdown-header"&gt;Dropdown header&lt;/h6&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapDropdowns())">
                <i class="fas fa-plus"></i> Insert Dropdown Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('collapse')">
                <i class="fas fa-compress"></i> Show Collapse
            </button>
        </div>
    `
}
,collapse: {
    title: "Collapse",
    subtitle: "Toggle the visibility of content across your project with collapsible Bootstrap components.",
    breadcrumb: ["Components", "Collapse"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Collapse Example</span>
                <button class="btn-copy" onclick="copyCode('collapse-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Toggle content
                    </a>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        This is some placeholder content for a collapse component.
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="collapse-basic">&lt;a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"&gt;
  Toggle content
&lt;/a&gt;

&lt;div class="collapse" id="collapseExample"&gt;
  &lt;div class="card card-body"&gt;
    This is some placeholder content for a collapse component.
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Multiple Targets</span>
                <button class="btn-copy" onclick="copyCode('collapse-multiple')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapse1" role="button" aria-expanded="false" aria-controls="multiCollapse1">Toggle first element</a>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapse2" aria-expanded="false" aria-controls="multiCollapse2">Toggle second element</button>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapse1 multiCollapse2">Toggle both elements</button>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapse1">
                            <div class="card card-body">
                                First collapsible content.
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapse2">
                            <div class="card card-body">
                                Second collapsible content.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="collapse-multiple">&lt;a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapse1" role="button" aria-expanded="false" aria-controls="multiCollapse1"&gt;Toggle first element&lt;/a&gt;
&lt;button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapse2" aria-expanded="false" aria-controls="multiCollapse2"&gt;Toggle second element&lt;/button&gt;
&lt;button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapse1 multiCollapse2"&gt;Toggle both elements&lt;/button&gt;

&lt;div class="row"&gt;
  &lt;div class="col"&gt;
    &lt;div class="collapse multi-collapse" id="multiCollapse1"&gt;
      &lt;div class="card card-body"&gt;
        First collapsible content.
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col"&gt;
    &lt;div class="collapse multi-collapse" id="multiCollapse2"&gt;
      &lt;div class="card card-body"&gt;
        Second collapsible content.
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapCollapse())">
                <i class="fas fa-plus"></i> Insert Collapse Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('close-button')">
                <i class="fas fa-times-circle"></i> Show Close Button
            </button>
        </div>
    `
}
,closebutton: {
    title: "Close Button",
    subtitle: "A generic close button for dismissing content like modals and alerts.",
    breadcrumb: ["Components", "Close button"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Default Close Button</span>
                <button class="btn-copy" onclick="copyCode('close-button-default')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <button type="button" class="btn-close" aria-label="Close"></button>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="close-button-default">&lt;button type="button" class="btn-close" aria-label="Close"&gt;&lt;/button&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>White Close Button</span>
                <button class="btn-copy" onclick="copyCode('close-button-white')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content bg-dark p-3">
                <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="close-button-white">&lt;button type="button" class="btn-close btn-close-white" aria-label="Close"&gt;&lt;/button&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapCloseButton())">
                <i class="fas fa-plus"></i> Insert Close Button Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('carousel')">
                <i class="fas fa-images"></i> Show Carousel
            </button>
        </div>
    `
}
,carousel: {
    title: "Carousel",
    subtitle: "Create a slideshow component for cycling through elements like images or text.",
    breadcrumb: ["Components", "Carousel"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Carousel</span>
                <button class="btn-copy" onclick="copyCode('carousel-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://via.placeholder.com/800x300" class="d-block w-100" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img src="https://via.placeholder.com/800x300?text=Second" class="d-block w-100" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img src="https://via.placeholder.com/800x300?text=Third" class="d-block w-100" alt="Third slide">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="carousel-basic">&lt;div id="carouselExample" class="carousel slide" data-bs-ride="carousel"&gt;
  &lt;div class="carousel-inner"&gt;
    &lt;div class="carousel-item active"&gt;
      &lt;img src="https://via.placeholder.com/800x300" class="d-block w-100" alt="First slide"&gt;
    &lt;/div&gt;
    &lt;div class="carousel-item"&gt;
      &lt;img src="https://via.placeholder.com/800x300?text=Second" class="d-block w-100" alt="Second slide"&gt;
    &lt;/div&gt;
    &lt;div class="carousel-item"&gt;
      &lt;img src="https://via.placeholder.com/800x300?text=Third" class="d-block w-100" alt="Third slide"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"&gt;
    &lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"&gt;
    &lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;
    &lt;span class="visually-hidden"&gt;Next&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapCarousel())">
                <i class="fas fa-plus"></i> Insert Carousel Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('card')">
                <i class="fas fa-clone"></i> Show Card
            </button>
        </div>
    `
}
,card: {
    title: "Card",
    subtitle: "Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.",
    breadcrumb: ["Components", "Card"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Card</span>
                <button class="btn-copy" onclick="copyCode('card-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="card" style="width: 18rem;">
                    <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Card image">
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="card-basic">&lt;div class="card" style="width: 18rem;"&gt;
  &lt;img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Card image"&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Card Title&lt;/h5&gt;
    &lt;p class="card-text"&gt;Some quick example text to build on the card title and make up the bulk of the content.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Card with Header & Footer</span>
                <button class="btn-copy" onclick="copyCode('card-header-footer')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="card text-center">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="card-header-footer">&lt;div class="card text-center"&gt;
  &lt;div class="card-header"&gt;
    Featured
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Special title treatment&lt;/h5&gt;
    &lt;p class="card-text"&gt;With supporting text below as a natural lead-in to additional content.&lt;/p&gt;
    &lt;a href="#" class="btn btn-primary"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="card-footer text-muted"&gt;
    2 days ago
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapCard())">
                <i class="fas fa-plus"></i> Insert Card Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('buttongroup')">
                <i class="fas fa-object-group"></i> Show Button Group
            </button>
        </div>
    `
}
,buttongroup: {
    title: "Button Group",
    subtitle: "Group a series of buttons together on a single line with the button group.",
    breadcrumb: ["Components", "Button group"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Button Group</span>
                <button class="btn-copy" onclick="copyCode('buttongroup-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Left</button>
                    <button type="button" class="btn btn-primary">Middle</button>
                    <button type="button" class="btn btn-primary">Right</button>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="buttongroup-basic">&lt;div class="btn-group" role="group" aria-label="Basic example"&gt;
  &lt;button type="button" class="btn btn-primary"&gt;Left&lt;/button&gt;
  &lt;button type="button" class="btn btn-primary"&gt;Middle&lt;/button&gt;
  &lt;button type="button" class="btn btn-primary"&gt;Right&lt;/button&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Button Toolbar</span>
                <button class="btn-copy" onclick="copyCode('buttongroup-toolbar')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary">1</button>
                        <button type="button" class="btn btn-secondary">2</button>
                        <button type="button" class="btn btn-secondary">3</button>
                        <button type="button" class="btn btn-secondary">4</button>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-secondary">5</button>
                        <button type="button" class="btn btn-secondary">6</button>
                        <button type="button" class="btn btn-secondary">7</button>
                    </div>
                    <div class="btn-group" role="group" aria-label="Third group">
                        <button type="button" class="btn btn-secondary">8</button>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="buttongroup-toolbar">&lt;div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"&gt;
  &lt;div class="btn-group me-2" role="group" aria-label="First group"&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;1&lt;/button&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;2&lt;/button&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;3&lt;/button&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;4&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="btn-group me-2" role="group" aria-label="Second group"&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;5&lt;/button&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;6&lt;/button&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;7&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="btn-group" role="group" aria-label="Third group"&gt;
    &lt;button type="button" class="btn btn-secondary"&gt;8&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapButtonGroup())">
                <i class="fas fa-plus"></i> Insert Button Group Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('badge')">
                <i class="fas fa-certificate"></i> Show Badge
            </button>
        </div>
    `
}
,badge: {
    title: "Badge",
    subtitle: "Badges scale to match the size of the immediate parent element by using relative font sizing and em units.",
    breadcrumb: ["Components", "Badge"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Badges</span>
                <button class="btn-copy" onclick="copyCode('badge-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <h1>Example heading <span class="badge bg-secondary">New</span></h1>
                <h2>Example heading <span class="badge bg-secondary">New</span></h2>
                <h3>Example heading <span class="badge bg-secondary">New</span></h3>
                <h4>Example heading <span class="badge bg-secondary">New</span></h4>
                <h5>Example heading <span class="badge bg-secondary">New</span></h5>
                <h6>Example heading <span class="badge bg-secondary">New</span></h6>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="badge-basic">&lt;h1&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;span class="badge bg-secondary"&gt;New&lt;/span&gt;&lt;/h6&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Pill Badges</span>
                <button class="btn-copy" onclick="copyCode('badge-pill')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <span class="badge rounded-pill bg-primary">Primary</span>
                <span class="badge rounded-pill bg-secondary">Secondary</span>
                <span class="badge rounded-pill bg-success">Success</span>
                <span class="badge rounded-pill bg-danger">Danger</span>
                <span class="badge rounded-pill bg-warning text-dark">Warning</span>
                <span class="badge rounded-pill bg-info text-dark">Info</span>
                <span class="badge rounded-pill bg-light text-dark">Light</span>
                <span class="badge rounded-pill bg-dark">Dark</span>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="badge-pill">&lt;span class="badge rounded-pill bg-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge rounded-pill bg-secondary"&gt;Secondary&lt;/span&gt;
&lt;span class="badge rounded-pill bg-success"&gt;Success&lt;/span&gt;
&lt;span class="badge rounded-pill bg-danger"&gt;Danger&lt;/span&gt;
&lt;span class="badge rounded-pill bg-warning text-dark"&gt;Warning&lt;/span&gt;
&lt;span class="badge rounded-pill bg-info text-dark"&gt;Info&lt;/span&gt;
&lt;span class="badge rounded-pill bg-light text-dark"&gt;Light&lt;/span&gt;
&lt;span class="badge rounded-pill bg-dark"&gt;Dark&lt;/span&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapBadge())">
                <i class="fas fa-plus"></i> Insert Badge Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('breadcrumb')">
                <i class="fas fa-angle-double-right"></i> Show Breadcrumb
            </button>
        </div>
    `
}
,breadcrumb: {
    title: "Breadcrumb",
    subtitle: "Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.",
    breadcrumb: ["Components", "Breadcrumb"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Breadcrumb</span>
                <button class="btn-copy" onclick="copyCode('breadcrumb-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="breadcrumb-basic">&lt;nav aria-label="breadcrumb"&gt;
  &lt;ol class="breadcrumb"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Library&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active" aria-current="page"&gt;Data&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Custom Divider</span>
                <button class="btn-copy" onclick="copyCode('breadcrumb-divider')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="breadcrumb-divider">&lt;nav style="--bs-breadcrumb-divider: '&gt;';" aria-label="breadcrumb"&gt;
  &lt;ol class="breadcrumb"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Library&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active" aria-current="page"&gt;Data&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapBreadcrumb())">
                <i class="fas fa-plus"></i> Insert Breadcrumb Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('alert')">
                <i class="fas fa-bell"></i> Show Alert
            </button>
        </div>
    `
}
,alert: {
    title: "Alerts",
    subtitle: "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
    breadcrumb: ["Components", "Alert"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Alerts</span>
                <button class="btn-copy" onclick="copyCode('alert-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
                <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
                <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
                <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
                <div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
                <div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
                <div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
                <div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="alert-basic">&lt;div class="alert alert-primary" role="alert"&gt;A simple primary alert—check it out!&lt;/div&gt;
&lt;div class="alert alert-secondary" role="alert"&gt;A simple secondary alert—check it out!&lt;/div&gt;
&lt;div class="alert alert-success" role="alert"&gt;A simple success alert—check it out!&lt;/div&gt;
&lt;div class="alert alert-danger" role="alert"&gt;A simple danger alert—check it out!&lt;/div&gt;
&lt;div class="alert alert-warning" role="alert"&gt;A simple warning alert—check it out!&lt;/div&gt;
&lt;div class="alert alert-info" role="alert"&gt;A simple info alert—check it out!&lt;/div&gt;
&lt;div class="alert alert-light" role="alert"&gt;A simple light alert—check it out!&lt;/div&gt;
&lt;div class="alert alert-dark" role="alert"&gt;A simple dark alert—check it out!&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="example-container">
            <div class="example-header">
                <span>Dismissible Alert</span>
                <button class="btn-copy" onclick="copyCode('alert-dismissible')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="alert-dismissible">&lt;div class="alert alert-warning alert-dismissible fade show" role="alert"&gt;
  &lt;strong&gt;Holy guacamole!&lt;/strong&gt; You should check in on some of those fields below.
  &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapAlert())">
                <i class="fas fa-plus"></i> Insert Alert Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('accordion')">
                <i class="fas fa-bars"></i> Show Accordion
            </button>
        </div>
    `
}
,accordion: {
    title: "Accordion",
    subtitle: "Build vertically collapsing accordions using the Collapse component.",
    breadcrumb: ["Components", "Accordion"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Accordion</span>
                <button class="btn-copy" onclick="copyCode('accordion-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element. These classes control the overall appearance, as well as the showing and
                                hiding via CSS transitions.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="accordion-basic">&lt;div class="accordion" id="accordionExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header" id="headingOne"&gt;
      &lt;button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"&gt;
        Accordion Item #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;
        &lt;strong&gt;This is the first item's accordion body.&lt;/strong&gt; It is shown by default...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header" id="headingTwo"&gt;
      &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"&gt;
        Accordion Item #2
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;
        &lt;strong&gt;This is the second item's accordion body.&lt;/strong&gt; It is hidden by default...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header" id="headingThree"&gt;
      &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"&gt;
        Accordion Item #3
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;
        &lt;strong&gt;This is the third item's accordion body.&lt;/strong&gt; It is hidden by default...
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapAccordion())">
                <i class="fas fa-plus"></i> Insert Accordion Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('modal')">
                <i class="fas fa-window-maximize"></i> Show Modal
            </button>
        </div>
    `
}
,modal: {
    title: "Modal",
    subtitle: "Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.",
    breadcrumb: ["Components", "Modal"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Modal</span>
                <button class="btn-copy" onclick="copyCode('modal-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Woohoo, you're reading this text in a modal!
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="modal-basic">&lt;!-- Button trigger modal --&gt;
&lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"&gt;
  Launch demo modal
&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h5 class="modal-title" id="exampleModalLabel"&gt;Modal title&lt;/h5&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        Woohoo, you're reading this text in a modal!
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapModal())">
                <i class="fas fa-plus"></i> Insert Modal Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('navs')">
                <i class="fas fa-ellipsis-h"></i> Show Navs & Tabs
            </button>
        </div>
    `
}
,navs: {
    title: "Navs & Tabs",
    subtitle: "Documentation and examples for how to use Bootstrap’s included navigation components.",
    breadcrumb: ["Components", "Navs & tabs"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Tabs</span>
                <button class="btn-copy" onclick="copyCode('nav-tabs')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active p-3 border border-top-0" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">Home content</div>
                    <div class="tab-pane fade p-3 border border-top-0" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">Profile content</div>
                    <div class="tab-pane fade p-3 border border-top-0" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Contact content</div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="nav-tabs">&lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"&gt;Home&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"&gt;Profile&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"&gt;Contact&lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;div class="tab-content" id="myTabContent"&gt;
  &lt;div class="tab-pane fade show active p-3 border border-top-0" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"&gt;Home content&lt;/div&gt;
  &lt;div class="tab-pane fade p-3 border border-top-0" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"&gt;Profile content&lt;/div&gt;
  &lt;div class="tab-pane fade p-3 border border-top-0" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"&gt;Contact content&lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapNavTabs())">
                <i class="fas fa-plus"></i> Insert Nav Tabs Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('navbar')">
                <i class="fas fa-bars"></i> Show Navbar
            </button>
        </div>
    `
}
,navbar: {
    title: "Navbar",
    subtitle: "Documentation and examples for Bootstrap’s powerful, responsive navigation header—the navbar.",
    breadcrumb: ["Components", "Navbar"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Navbar</span>
                <button class="btn-copy" onclick="copyCode('navbar-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="navbar-basic">&lt;nav class="navbar navbar-expand-lg bg-light"&gt;
  &lt;div class="container-fluid"&gt;
    &lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
    &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"&gt;
      &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div class="collapse navbar-collapse" id="navbarSupportedContent"&gt;
      &lt;ul class="navbar-nav me-auto mb-2 mb-lg-0"&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link active" aria-current="page" href="#"&gt;Home&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link" href="#"&gt;Link&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item dropdown"&gt;
          &lt;a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
            Dropdown
          &lt;/a&gt;
          &lt;ul class="dropdown-menu"&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link disabled"&gt;Disabled&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;form class="d-flex" role="search"&gt;
        &lt;input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"&gt;
        &lt;button class="btn btn-outline-success" type="submit"&gt;Search&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapNavbar())">
                <i class="fas fa-plus"></i> Insert Navbar Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('offcanvas')">
                <i class="fas fa-columns"></i> Show Offcanvas
            </button>
        </div>
    `
}
,offcanvas: {
    title: "Offcanvas",
    subtitle: "Build hidden sidebars into your project for navigation, shopping carts, and more using the offcanvas component.",
    breadcrumb: ["Components", "Offcanvas"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Offcanvas Example</span>
                <button class="btn-copy" onclick="copyCode('offcanvas-example')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <!-- Button trigger offcanvas -->
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Toggle Offcanvas
                </button>

                <!-- Offcanvas -->
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            Some placeholder text in the offcanvas component. You can place just about any Bootstrap component or custom elements here.
                        </div>
                        <div class="dropdown mt-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="offcanvas-example">&lt;!-- Button trigger offcanvas --&gt;
&lt;button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"&gt;
  Toggle Offcanvas
&lt;/button&gt;

&lt;!-- Offcanvas --&gt;
&lt;div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"&gt;
  &lt;div class="offcanvas-header"&gt;
    &lt;h5 class="offcanvas-title" id="offcanvasExampleLabel"&gt;Offcanvas&lt;/h5&gt;
    &lt;button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="offcanvas-body"&gt;
    &lt;div&gt;
      Some placeholder text in the offcanvas component...
    &lt;/div&gt;
    &lt;div class="dropdown mt-3"&gt;
      &lt;button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"&gt;
        Dropdown button
      &lt;/button&gt;
      &lt;ul class="dropdown-menu"&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapOffcanvas())">
                <i class="fas fa-plus"></i> Insert Offcanvas Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('pagination')">
                <i class="fas fa-angle-double-right"></i> Show Pagination
            </button>
        </div>
    `
}
,pagination: {
    title: "Pagination",
    subtitle: "Use Bootstrap’s pagination component to separate content into pages.",
    breadcrumb: ["Components", "Pagination"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Pagination</span>
                <button class="btn-copy" onclick="copyCode('pagination-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="pagination-basic">&lt;nav aria-label="Page navigation example"&gt;
  &lt;ul class="pagination"&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;Previous&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;Next&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapPagination())">
                <i class="fas fa-plus"></i> Insert Pagination Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('placeholders')">
                <i class="fas fa-magic"></i> Show Placeholders
            </button>
        </div>
    `
}
,placeholders: {
    title: "Placeholders",
    subtitle: "Use loading placeholders for your components or pages to indicate something is still loading.",
    breadcrumb: ["Components", "Placeholders"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Placeholder</span>
                <button class="btn-copy" onclick="copyCode('placeholder-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p aria-hidden="true">
                    <span class="placeholder col-6"></span>
                </p>

                <p class="placeholder-glow">
                    <span class="placeholder col-12"></span>
                </p>

                <p class="placeholder-wave">
                    <span class="placeholder col-12"></span>
                </p>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="placeholder-basic">&lt;p aria-hidden="true"&gt;
  &lt;span class="placeholder col-6"&gt;&lt;/span&gt;
&lt;/p&gt;

&lt;p class="placeholder-glow"&gt;
  &lt;span class="placeholder col-12"&gt;&lt;/span&gt;
&lt;/p&gt;

&lt;p class="placeholder-wave"&gt;
  &lt;span class="placeholder col-12"&gt;&lt;/span&gt;
&lt;/p&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapPlaceholders())">
                <i class="fas fa-plus"></i> Insert Placeholder Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('popovers')">
                <i class="fas fa-comment-dots"></i> Show Popovers
            </button>
        </div>
    `
}
,popovers: {
    title: "Popovers",
    subtitle: "Add small overlay content, like those found in iOS, to any element for housing secondary information.",
    breadcrumb: ["Components", "Popovers"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Popover</span>
                <button class="btn-copy" onclick="copyCode('popover-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">
                    Click to toggle popover
                </button>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="popover-basic">&lt;button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"&gt;
  Click to toggle popover
&lt;/button&gt;</pre>
                </div>
            </div>

            <div class="example-footer mt-3">
                <p>⚠️ <strong>Initialize with JavaScript:</strong></p>
                <pre><code>const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(triggerEl =&gt; new bootstrap.Popover(triggerEl))</code></pre>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapPopovers())">
                <i class="fas fa-plus"></i> Insert Popover Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('progress')">
                <i class="fas fa-tasks"></i> Show Progress
            </button>
        </div>
    `
}
,progress: {
    title: "Progress",
    subtitle: "Use Bootstrap’s custom progress component for displaying progress bars with support for stacked bars, animated backgrounds, and text labels.",
    breadcrumb: ["Components", "Progress"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Progress Bar</span>
                <button class="btn-copy" onclick="copyCode('progress-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="progress mb-3">
                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>

                <div class="progress mb-3">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>

                <div class="progress mb-3">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>

                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="progress-basic">&lt;div class="progress mb-3"&gt;
  &lt;div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"&gt;25%&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress mb-3"&gt;
  &lt;div class="progress-bar bg-success" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"&gt;50%&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress mb-3"&gt;
  &lt;div class="progress-bar bg-info" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"&gt;75%&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress"&gt;
  &lt;div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"&gt;100%&lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapProgress())">
                <i class="fas fa-plus"></i> Insert Progress Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('scrollspy')">
                <i class="fas fa-scroll"></i> Show Scrollspy
            </button>
        </div>
    `
}
,scrollspy: {
    title: "Scrollspy",
    subtitle: "Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active.",
    breadcrumb: ["Components", "Scrollspy"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Scrollspy Example</span>
                <button class="btn-copy" onclick="copyCode('scrollspy-example')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">First</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading2">Second</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example position-relative overflow-auto border p-3" tabindex="0" style="height: 200px;">
                    <h4 id="scrollspyHeading1">First heading</h4>
                    <p>Content for first heading...</p>
                    <h4 id="scrollspyHeading2">Second heading</h4>
                    <p>Content for second heading...</p>
                    <h4 id="scrollspyHeading3">Third heading</h4>
                    <p>Content for third heading...</p>
                    <h4 id="scrollspyHeading4">Fourth heading</h4>
                    <p>Content for fourth heading...</p>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="scrollspy-example">&lt;nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3"&gt;
  &lt;a class="navbar-brand" href="#"&gt;Navbar&lt;/a&gt;
  &lt;ul class="nav nav-pills"&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="#scrollspyHeading1"&gt;First&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item"&gt;
      &lt;a class="nav-link" href="#scrollspyHeading2"&gt;Second&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="nav-item dropdown"&gt;
      &lt;a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"&gt;Dropdown&lt;/a&gt;
      &lt;ul class="dropdown-menu"&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading3"&gt;Third&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#scrollspyHeading4"&gt;Fourth&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example position-relative overflow-auto border p-3" tabindex="0" style="height: 200px;"&gt;
  &lt;h4 id="scrollspyHeading1"&gt;First heading&lt;/h4&gt;
  &lt;p&gt;Content for first heading...&lt;/p&gt;
  &lt;h4 id="scrollspyHeading2"&gt;Second heading&lt;/h4&gt;
  &lt;p&gt;Content for second heading...&lt;/p&gt;
  &lt;h4 id="scrollspyHeading3"&gt;Third heading&lt;/h4&gt;
  &lt;p&gt;Content for third heading...&lt;/p&gt;
  &lt;h4 id="scrollspyHeading4"&gt;Fourth heading&lt;/h4&gt;
  &lt;p&gt;Content for fourth heading...&lt;/p&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapScrollspy())">
                <i class="fas fa-plus"></i> Insert Scrollspy Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('spinners')">
                <i class="fas fa-spinner fa-spin"></i> Show Spinners
            </button>
        </div>
    `
}
,spinners: {
    title: "Spinners",
    subtitle: "Use Bootstrap spinners to show a loading state in your projects.",
    breadcrumb: ["Components", "Spinners"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Border Spinners</span>
                <button class="btn-copy" onclick="copyCode('spinners-border')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content d-flex gap-3 align-items-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border text-secondary" role="status"></div>
                <div class="spinner-border text-success" role="status"></div>
                <div class="spinner-border text-danger" role="status"></div>
                <div class="spinner-border text-warning" role="status"></div>
                <div class="spinner-border text-info" role="status"></div>
                <div class="spinner-border text-light" role="status"></div>
                <div class="spinner-border text-dark" role="status"></div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="spinners-border">&lt;div class="spinner-border text-primary" role="status"&gt;
  &lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;
&lt;/div&gt;
&lt;div class="spinner-border text-secondary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-success" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-danger" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-warning" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-info" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-light" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-border text-dark" role="status"&gt;&lt;/div&gt;</pre>
                </div>
            </div>

            <div class="example-header mt-5">
                <span>Growing Spinners</span>
                <button class="btn-copy" onclick="copyCode('spinners-grow')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content d-flex gap-3 align-items-center">
                <div class="spinner-grow text-primary" role="status"></div>
                <div class="spinner-grow text-secondary" role="status"></div>
                <div class="spinner-grow text-success" role="status"></div>
                <div class="spinner-grow text-danger" role="status"></div>
                <div class="spinner-grow text-warning" role="status"></div>
                <div class="spinner-grow text-info" role="status"></div>
                <div class="spinner-grow text-light" role="status"></div>
                <div class="spinner-grow text-dark" role="status"></div>
            </div>

            <div class="code-container mt-3">
                <div class="code-content">
                    <pre id="spinners-grow">&lt;div class="spinner-grow text-primary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-secondary" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-success" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-danger" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-warning" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-info" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-light" role="status"&gt;&lt;/div&gt;
&lt;div class="spinner-grow text-dark" role="status"&gt;&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapSpinners())">
                <i class="fas fa-plus"></i> Insert Spinner Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('toasts')">
                <i class="fas fa-bread-slice"></i> Show Toasts
            </button>
        </div>
    `
}
,toasts: {
    title: "Toasts",
    subtitle: "Push notifications to your visitors with a lightweight toast component powered by Bootstrap’s JavaScript.",
    breadcrumb: ["Components", "Toasts"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Basic Toast</span>
                <button class="btn-copy" onclick="copyCode('toast-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="toast-container position-static">
                    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" class="rounded me-2" alt="...">
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="toast-basic">&lt;div class="toast show" role="alert" aria-live="assertive" aria-atomic="true"&gt;
  &lt;div class="toast-header"&gt;
    &lt;img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" class="rounded me-2" alt="..."&gt;
    &lt;strong class="me-auto"&gt;Bootstrap&lt;/strong&gt;
    &lt;small&gt;11 mins ago&lt;/small&gt;
    &lt;button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="toast-body"&gt;
    Hello, world! This is a toast message.
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>

            <div class="example-footer mt-4">
                <p>⚙️ <strong>Initialization (JavaScript):</strong></p>
                <pre><code>const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl =&gt; new bootstrap.Toast(toastEl))</code></pre>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapToasts())">
                <i class="fas fa-plus"></i> Insert Toast Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('tooltips')">
                <i class="fas fa-question-circle"></i> Show Tooltips
            </button>
        </div>
    `
}
,tooltips: {
    title: "Tooltips",
    subtitle: "Use Bootstrap’s custom tooltips to show contextual help or small overlays triggered by hover or focus.",
    breadcrumb: ["Components", "Tooltips"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Tooltip Example</span>
                <button class="btn-copy" onclick="copyCode('tooltip-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content d-flex flex-wrap gap-3">
                <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    Tooltip on top
                </button>
                <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
                    Tooltip on right
                </button>
                <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
                    Tooltip on bottom
                </button>
                <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
                    Tooltip on left
                </button>
            </div>

            <div class="code-container mt-3">
                <div class="code-content">
                    <pre id="tooltip-basic">&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"&gt;
  Tooltip on top
&lt;/button&gt;

&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right"&gt;
  Tooltip on right
&lt;/button&gt;

&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom"&gt;
  Tooltip on bottom
&lt;/button&gt;

&lt;button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left"&gt;
  Tooltip on left
&lt;/button&gt;</pre>
                </div>
            </div>

            <div class="example-footer mt-4">
                <p>⚙️ <strong>Initialization (JavaScript):</strong></p>
                <pre><code>const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(el =&gt; new bootstrap.Tooltip(el))</code></pre>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapTooltips())">
                <i class="fas fa-plus"></i> Insert Tooltip Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('helpers')">
                <i class="fas fa-hands-helping"></i> Show Helpers
            </button>
        </div>
    `
}
,helpers: {
    title: "Helpers",
    subtitle: "Bootstrap includes a handful of helpful utility classes to give you control over positioning, visibility, and more.",
    breadcrumb: ["Helpers"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Clearfix</span>
                <button class="btn-copy" onclick="copyCode('helper-clearfix')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content clearfix">
                <div class="float-start">Float start</div>
                <div class="float-end">Float end</div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="helper-clearfix">&lt;div class="clearfix"&gt;
  &lt;div class="float-start"&gt;Float start&lt;/div&gt;
  &lt;div class="float-end"&gt;Float end&lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>

            <div class="example-header mt-5">
                <span>Stretched Link</span>
                <button class="btn-copy" onclick="copyCode('helper-stretched-link')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
                <div class="card" style="width: 18rem;">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card with stretched link</h5>
                        <p class="card-text">Some quick example text to build on the card title.</p>
                        <a href="#" class="stretched-link">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="code-container">
                <div class="code-content">
                    <pre id="helper-stretched-link">&lt;div class="card" style="width: 18rem;"&gt;
  &lt;img src="https://via.placeholder.com/150" class="card-img-top" alt="..."&gt;
  &lt;div class="card-body"&gt;
    &lt;h5 class="card-title"&gt;Card with stretched link&lt;/h5&gt;
    &lt;p class="card-text"&gt;Some quick example text to build on the card title.&lt;/p&gt;
    &lt;a href="#" class="stretched-link"&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapHelpers())">
                <i class="fas fa-plus"></i> Insert Helpers Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('utilities')">
                <i class="fas fa-sliders-h"></i> Show Utilities
            </button>
        </div>
    `
}
,utilities: {
    title: "Utilities",
    subtitle: "Bootstrap includes dozens of utility classes for showing, hiding, spacing, coloring, aligning, and more—no custom CSS needed.",
    breadcrumb: ["Utilities"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Text Utilities</span>
                <button class="btn-copy" onclick="copyCode('utilities-text')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p class="text-start">Start aligned text.</p>
                <p class="text-center">Center aligned text.</p>
                <p class="text-end">End aligned text.</p>
            </div>

            <div class="code-container">
                <div class="code-content">
                    <pre id="utilities-text">&lt;p class="text-start"&gt;Start aligned text.&lt;/p&gt;
&lt;p class="text-center"&gt;Center aligned text.&lt;/p&gt;
&lt;p class="text-end"&gt;End aligned text.&lt;/p&gt;</pre>
                </div>
            </div>

            <div class="example-header mt-5">
                <span>Background & Border Utilities</span>
                <button class="btn-copy" onclick="copyCode('utilities-bg-border')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
                <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                <div class="p-3 mb-2 border border-primary">.border-primary</div>
                <div class="p-3 mb-2 border border-danger">.border-danger</div>
            </div>

            <div class="code-container mt-3">
                <div class="code-content">
                    <pre id="utilities-bg-border">&lt;div class="p-3 mb-2 bg-primary text-white"&gt;.bg-primary&lt;/div&gt;
&lt;div class="p-3 mb-2 bg-success text-white"&gt;.bg-success&lt;/div&gt;
&lt;div class="p-3 mb-2 bg-danger text-white"&gt;.bg-danger&lt;/div&gt;
&lt;div class="p-3 mb-2 border border-primary"&gt;.border-primary&lt;/div&gt;
&lt;div class="p-3 mb-2 border border-danger"&gt;.border-danger&lt;/div&gt;</pre>
                </div>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapUtilities())">
                <i class="fas fa-plus"></i> Insert Utilities Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('api')">
                <i class="fas fa-code"></i> Show API
            </button>
        </div>
    `
}
,api: {
    title: "Utilities API",
    subtitle: "Use Bootstrap’s powerful utilities API to generate utilities with your own values, breakpoints, and more.",
    breadcrumb: ["Utilities", "API"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Extending with the Utilities API</span>
                <button class="btn-copy" onclick="copyCode('utilities-api-example')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p>This is used mainly in <code>_utilities.scss</code> to generate utility classes. For example, here's how spacing utilities are created:</p>
                <pre><code>$utilities: (
  "margin": (
    property: margin,
    responsive: true,
    values: map-merge(
      $spacers,
      (
        auto: auto
      )
    )
  ),
  "padding": (
    property: padding,
    responsive: true,
    values: $spacers
  )
);</code></pre>
                <p>You can override or extend this map in your custom Sass file to add more utilities.</p>
            </div>

            <div class="example-footer mt-4">
                <p>📘 Learn more by visiting the <a href="https://getbootstrap.com/docs/5.3/utilities/api/" target="_blank">official documentation</a>.</p>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-outline-primary" onclick="showContent('extend')">
                <i class="fas fa-layer-group"></i> Show Extend
            </button>
        </div>
    `
}
,extend: {
    title: "Extend",
    subtitle: "Customize Bootstrap by extending or overriding default Sass maps, variables, and utilities.",
    breadcrumb: ["Extend"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Extend Bootstrap</span>
                <button class="btn-copy" onclick="copyCode('extend-bootstrap')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p>You can extend Bootstrap’s Sass maps and variables by importing Bootstrap’s source Sass files and modifying the default maps before importing individual components.</p>
                <pre><code>// Custom.scss

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "bootstrap/scss/functions";

// 2. Include any default variable overrides here

$primary: #900;
$enable-shadows: true;

// 3. Include remainder of required Bootstrap stylesheets
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

// 4. Include any optional Bootstrap components as needed
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/buttons";

// 5. Add additional custom code here</code></pre>
                <p>This allows full control over what Bootstrap features are used and customized in your project.</p>
            </div>

            <div class="example-footer mt-4">
                <p>📚 Read more in the <a href="https://getbootstrap.com/docs/5.3/customize/extend/" target="_blank">official docs</a> about extending Bootstrap with Sass.</p>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-outline-primary" onclick="showContent('approach')">
                <i class="fas fa-code-branch"></i> Show Approach
            </button>
        </div>
    `
}
,approach: {
    title: "Approach",
    subtitle: "Understand the design and development principles that guide Bootstrap’s structure and decisions.",
    breadcrumb: ["Extend", "Approach"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Design Philosophy</span>
                <button class="btn-copy" onclick="copyCode('approach-philosophy')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p>Bootstrap’s approach focuses on:</p>
                <ul>
                    <li><strong>Consistency:</strong> Across devices and browsers.</li>
                    <li><strong>Reusability:</strong> Modular and customizable components.</li>
                    <li><strong>Responsiveness:</strong> Mobile-first and flexible layouts.</li>
                    <li><strong>Utility-first:</strong> Built-in utility classes to reduce custom CSS.</li>
                </ul>
                <p>These principles help maintain a scalable and maintainable codebase.</p>
            </div>

            <div class="example-footer mt-4">
                <p>💡 <strong>Tip:</strong> Stick to Bootstrap’s structure and philosophy for faster development and easier collaboration.</p>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-outline-primary" onclick="showContent('icons')">
                <i class="fas fa-icons"></i> Show Icons
            </button>
        </div>
    `
}
,icons: {
    title: "Icons",
    subtitle: "Use Bootstrap Icons — a free, high-quality open-source icon library — in your projects.",
    breadcrumb: ["Extend", "Icons"],
    content: `
        <div class="example-container">
            <div class="example-header">
                <span>Using Bootstrap Icons</span>
                <button class="btn-copy" onclick="copyCode('icons-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>

            <div class="example-content">
                <p>Bootstrap Icons can be used via CDN or installed locally. Here's how to use the CDN method:</p>
                <pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"&gt;</code></pre>

                <p>Then use icons like this:</p>
                <div class="d-flex gap-3 align-items-center">
                    <i class="bi bi-alarm" style="font-size: 2rem;"></i>
                    <i class="bi bi-bootstrap" style="font-size: 2rem; color: #7952b3;"></i>
                    <i class="bi bi-calendar" style="font-size: 2rem;"></i>
                </div>

                <pre class="mt-3"><code>&lt;i class="bi bi-alarm"&gt;&lt;/i&gt;
&lt;i class="bi bi-bootstrap"&gt;&lt;/i&gt;
&lt;i class="bi bi-calendar"&gt;&lt;/i&gt;</code></pre>
            </div>

            <div class="example-footer mt-4">
                <p>🎨 Browse all icons at <a href="https://icons.getbootstrap.com/" target="_blank">icons.getbootstrap.com</a></p>
            </div>
        </div>

        <div class="quick-actions mt-4">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapIcons())">
                <i class="bi bi-plus-circle"></i> Insert Icons Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('about')">
                <i class="fas fa-info-circle"></i> Show About
            </button>
        </div>
    `
}
,
gettingStarted: {
    title: "Getting Started",
    subtitle: "Start using Tailwind CSS in your project with CDN, build tools, or frameworks.",
    category: "Core",
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>Introduction</span>
          </div>
  
          <div class="example-content">
              <p>Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes to build any design, directly in your markup.</p>
              <p>You can get started by adding it via CDN or by installing it with npm/yarn for full customization with PostCSS or your framework of choice.</p>
          </div>
      </div>
    `
  }
,download: {
    title: "Download",
    subtitle: "Use Tailwind via CDN for quick demos or install with npm for full power.",
    category: "Core",
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>Using via CDN</span>
          </div>
  
          <div class="example-content">
              <pre><code>&lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;</code></pre>
              <p>This method is great for quick prototyping but not recommended for production.</p>
          </div>
  
          <div class="example-header mt-4">
              <span>Install via npm</span>
          </div>
  
          <div class="example-content">
              <pre><code>npm install -D tailwindcss
  npx tailwindcss init</code></pre>
              <p>This method allows full customization and optimization of your styles.</p>
          </div>
      </div>
    `
  },
  introduction: {
    title: "Introduction",
    subtitle: "Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites.",
    breadcrumb: ["Getting started", "Introduction"],
    content: `
      <div class="example-note mb-4">
        <p>Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—using our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
  
      <div class="example-container">
        <div class="example-header">
          <span>Quick Start CDN</span>
          <button class="btn-copy" onclick="copyCode('bootstrap-cdn')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content">
          <pre id="bootstrap-cdn">&lt;!-- Bootstrap CSS --&gt;
  &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
  
  &lt;!-- Bootstrap Bundle JS (with Popper) --&gt;
  &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</pre>
        </div>
      </div>
  
      <div class="example-container mt-4">
        <div class="example-header">
          <span>Starter Template</span>
          <button class="btn-copy" onclick="copyCode('starter-template')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content">
          <pre id="starter-template">&lt;!doctype html&gt;
  &lt;html lang="en"&gt;
    &lt;head&gt;
      &lt;meta charset="utf-8"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
      &lt;title&gt;Bootstrap Starter&lt;/title&gt;
      &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1 class="text-center mt-5"&gt;Hello, Bootstrap!&lt;/h1&gt;
      &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
    &lt;/body&gt;
  &lt;/html&gt;</pre>
        </div>
      </div>
  
      <div class="example-container mt-4">
        <div class="example-header">
          <span>Features</span>
        </div>
        <div class="example-content">
          <ul>
            <li>Responsive grid system</li>
            <li>Extensive set of prebuilt UI components</li>
            <li>Sass-powered customization</li>
            <li>Powerful JavaScript plugins with no dependencies</li>
            <li>Comprehensive documentation and examples</li>
          </ul>
        </div>
      </div>
  
      <div class="example-note mt-4">
        <p>Ready to go deeper? Explore <code>Download</code>, <code>Contents</code>, and <code>Browsers & Devices</code> next.</p>
      </div>
  
      <div class="quick-actions">
        <button class="btn btn-primary" onclick="insertToParent(getIntroCode())">
          <i class="fas fa-plus"></i> Insert Introduction Code
        </button>
        <button class="btn btn-outline-primary" onclick="showContent('download')">
          <i class="fas fa-download"></i> View Download Options
        </button>
      </div>
    `
  }
  
,Overview: {
    title: "Form Overview",
    subtitle: "Bootstrap provides a wide range of form controls, layout options, and custom styles to build robust forms.",
    breadcrumb: ["Forms", "Overview"],
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>Basic Form Structure</span>
              <button class="btn-copy" onclick="copyCode('form-basic')"><i class="fas fa-copy"></i> Copy</button>
          </div>
  
          <div class="example-content">
              <form>
                  <div class="mb-3">
                      <label for="exampleEmail" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleEmail" aria-describedby="emailHelp">
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                      <label for="examplePassword" class="form-label">Password</label>
                      <input type="password" class="form-control" id="examplePassword">
                  </div>
                  <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck">
                      <label class="form-check-label" for="exampleCheck">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
  
          <div class="code-container mt-3">
              <pre id="form-basic">&lt;form&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="exampleEmail" class="form-label"&gt;Email address&lt;/label&gt;
      &lt;input type="email" class="form-control" id="exampleEmail" aria-describedby="emailHelp"&gt;
      &lt;div id="emailHelp" class="form-text"&gt;We'll never share your email with anyone else.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="examplePassword" class="form-label"&gt;Password&lt;/label&gt;
      &lt;input type="password" class="form-control" id="examplePassword"&gt;
    &lt;/div&gt;
    &lt;div class="mb-3 form-check"&gt;
      &lt;input type="checkbox" class="form-check-input" id="exampleCheck"&gt;
      &lt;label class="form-check-label" for="exampleCheck"&gt;Check me out&lt;/label&gt;
    &lt;/div&gt;
    &lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;
  &lt;/form&gt;</pre>
          </div>
      </div>
    `
  }
    ,formsOverview: {
        title: "Form Overview",
        subtitle: "Bootstrap provides a wide range of form controls, layout options, and custom styles to build robust forms.",
        breadcrumb: ["Forms", "Overview"],
        content: `
          <div class="example-container">
              <div class="example-header">
                  <span>Basic Form Structure</span>
                  <button class="btn-copy" onclick="copyCode('form-basic')"><i class="fas fa-copy"></i> Copy</button>
              </div>
      
              <div class="example-content">
                  <form>
                      <div class="mb-3">
                          <label for="exampleEmail" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleEmail" aria-describedby="emailHelp">
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div class="mb-3">
                          <label for="examplePassword" class="form-label">Password</label>
                          <input type="password" class="form-control" id="examplePassword">
                      </div>
                      <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck">
                          <label class="form-check-label" for="exampleCheck">Check me out</label>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
              </div>
      
              <div class="code-container mt-3">
                  <pre id="form-basic">&lt;form&gt;
        &lt;div class="mb-3"&gt;
          &lt;label for="exampleEmail" class="form-label"&gt;Email address&lt;/label&gt;
          &lt;input type="email" class="form-control" id="exampleEmail" aria-describedby="emailHelp"&gt;
          &lt;div id="emailHelp" class="form-text"&gt;We'll never share your email with anyone else.&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="mb-3"&gt;
          &lt;label for="examplePassword" class="form-label"&gt;Password&lt;/label&gt;
          &lt;input type="password" class="form-control" id="examplePassword"&gt;
        &lt;/div&gt;
        &lt;div class="mb-3 form-check"&gt;
          &lt;input type="checkbox" class="form-check-input" id="exampleCheck"&gt;
          &lt;label class="form-check-label" for="exampleCheck"&gt;Check me out&lt;/label&gt;
        &lt;/div&gt;
        &lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;
      &lt;/form&gt;</pre>
              </div>
          </div>
        `
      }
     ,colorModes: {
        title: "Color Modes",
        subtitle: "Bootstrap supports both light and dark color modes and lets you customize them globally or per element.",
        breadcrumb: ["Customize", "Color modes"],
        content: `
          <div class="example-container">
              <div class="example-header">
                  <span>Enable Dark Mode</span>
                  <button class="btn-copy" onclick="copyCode('color-modes')"><i class="fas fa-copy"></i> Copy</button>
              </div>
      
              <div class="example-content">
                  <p>Bootstrap 5.3 includes support for <strong>dark mode</strong> using CSS variables. You can switch themes using the <code>data-bs-theme</code> attribute or set it globally in the <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code> tag.</p>
      
                  <h5>🌞 Light Mode (default)</h5>
                  <pre><code>&lt;html data-bs-theme="light"&gt;</code></pre>
      
                  <h5>🌙 Dark Mode</h5>
                  <pre><code>&lt;html data-bs-theme="dark"&gt;</code></pre>
      
                  <h5>⚡ Auto Mode (based on user’s system preference)</h5>
                  <pre><code>&lt;html data-bs-theme="auto"&gt;</code></pre>
              </div>
      
              <div class="example-header mt-4">
                  <span>Per Element Theme</span>
              </div>
      
              <div class="example-content">
                  <p>You can also apply a theme to specific components:</p>
                  <pre><code>&lt;div class="card" data-bs-theme="dark"&gt;
        &lt;div class="card-body"&gt;
          This card uses dark mode only
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
              </div>
      
              <div class="example-footer mt-4">
                  <p>🎨 Bootstrap’s theme system is built on CSS variables, making it fully customizable and overrideable with Sass.</p>
              </div>
          </div>
        `
      },cssVariables: {
        title: "CSS Variables",
        subtitle: "Customize Bootstrap using CSS variables for color, spacing, typography, and more.",
        breadcrumb: ["Customize", "CSS variables"],
        content: `
          <div class="example-container">
              <div class="example-header">
                  <span>What are CSS Variables?</span>
              </div>
      
              <div class="example-content">
                  <p>Bootstrap 5 makes extensive use of <strong>CSS custom properties (variables)</strong> for easier customization and theming.</p>
                  <p>These variables are applied on the <code>:root</code> element (globally), or locally for specific components (like buttons, cards, etc.).</p>
              </div>
      
              <div class="example-header mt-4">
                  <span>Example of Global Variables</span>
              </div>
      
              <div class="example-content">
                  <pre><code>:root {
        --bs-primary: #0d6efd;
        --bs-secondary: #6c757d;
        --bs-success: #198754;
        --bs-info: #0dcaf0;
        --bs-warning: #ffc107;
        --bs-danger: #dc3545;
        --bs-light: #f8f9fa;
        --bs-dark: #212529;
      }</code></pre>
              </div>
      
              <div class="example-header mt-4">
                  <span>Example in Component (Button)</span>
              </div>
      
              <div class="example-content">
                  <pre><code>.btn {
        --bs-btn-padding-x: 0.75rem;
        --bs-btn-padding-y: 0.375rem;
        --bs-btn-font-weight: 400;
        --bs-btn-color: #fff;
        --bs-btn-bg: var(--bs-primary);
        --bs-btn-border-color: var(--bs-primary);
      }</code></pre>
              </div>
      
              <div class="example-header mt-4">
                  <span>Using in Your Custom CSS</span>
              </div>
      
              <div class="example-content">
                  <pre><code>button {
        background-color: var(--bs-primary);
        color: var(--bs-light);
      }</code></pre>
                  <p>You can override variables in your own stylesheets or modify them via Sass before compiling.</p>
              </div>
      
              <div class="example-footer mt-4">
                  <p>📚 Explore all available variables in the <a href="https://getbootstrap.com/docs/5.3/customize/css-variables/" target="_blank">official documentation</a>.</p>
              </div>
          </div>
        `
      }
      ,breakpoints: {
        title: "Breakpoints",
        subtitle: "Bootstrap includes six default breakpoints for building responsive layouts using media queries.",
        breadcrumb: ["Layout", "Breakpoints"],
        content: `
          <div class="example-container">
              <div class="example-header">
                  <span>Available Breakpoints</span>
              </div>
      
              <div class="example-content">
                  <table class="table table-bordered">
                      <thead>
                          <tr>
                              <th>Breakpoint</th>
                              <th>Class infix</th>
                              <th>Dimensions</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr><td>Extra small</td><td><em>None</em></td><td>&lt;576px</td></tr>
                          <tr><td>Small</td><td><code>sm</code></td><td>≥576px</td></tr>
                          <tr><td>Medium</td><td><code>md</code></td><td>≥768px</td></tr>
                          <tr><td>Large</td><td><code>lg</code></td><td>≥992px</td></tr>
                          <tr><td>Extra large</td><td><code>xl</code></td><td>≥1200px</td></tr>
                          <tr><td>XXL</td><td><code>xxl</code></td><td>≥1400px</td></tr>
                      </tbody>
                  </table>
              </div>
      
              <div class="example-header mt-4">
                  <span>Media Query Usage</span>
              </div>
      
              <div class="example-content">
                  <pre><code>@media (min-width: 768px) {
        .example-class {
          font-size: 1.25rem;
        }
      }</code></pre>
                  <p>Use these breakpoints to apply styles based on device width, either through utility classes or custom CSS media queries.</p>
              </div>
      
              <div class="example-footer mt-4">
                  <p>💡 You can customize or extend breakpoints in <code>_variables.scss</code> or <code>bootstrap.scss</code>.</p>
              </div>
          </div>
        `
      }
      ,containers: {
        title: "Containers",
        subtitle: "Containers are the building blocks of Bootstrap layouts. They center your content and provide horizontal padding.",
        breadcrumb: ["Layout", "Containers"],
        content: `
          <div class="example-container">
              <div class="example-header">
                  <span>Types of Containers</span>
              </div>
      
              <div class="example-content">
                  <p>There are three types of containers in Bootstrap:</p>
                  <ul>
                      <li><code>.container</code> – Responsive fixed width container.</li>
                      <li><code>.container-{breakpoint}</code> – Fixed-width container up to the specified breakpoint.</li>
                      <li><code>.container-fluid</code> – Full width, spanning the entire width of the viewport.</li>
                  </ul>
              </div>
      
              <div class="example-header mt-4">
                  <span>📌 .container</span>
              </div>
              <div class="example-content">
                  <p>A responsive fixed-width container that adapts to the current breakpoint.</p>
                  <pre><code>&lt;div class="container"&gt;
        ...
      &lt;/div&gt;</code></pre>
              </div>
      
              <div class="example-header mt-4">
                  <span>📌 .container-fluid</span>
              </div>
              <div class="example-content">
                  <p>Spans 100% of the viewport width at all breakpoints.</p>
                  <pre><code>&lt;div class="container-fluid"&gt;
        ...
      &lt;/div&gt;</code></pre>
              </div>
      
              <div class="example-header mt-4">
                  <span>📌 .container-{breakpoint}</span>
              </div>
              <div class="example-content">
                  <p>Sets a max-width at a specific breakpoint:</p>
                  <pre><code>&lt;div class="container-sm"&gt;576px and up&lt;/div&gt;
      &lt;div class="container-md"&gt;768px and up&lt;/div&gt;
      &lt;div class="container-lg"&gt;992px and up&lt;/div&gt;
      &lt;div class="container-xl"&gt;1200px and up&lt;/div&gt;
      &lt;div class="container-xxl"&gt;1400px and up&lt;/div&gt;</code></pre>
              </div>
      
              <div class="example-header mt-4">
                  <span>⚙️ Container Widths by Breakpoint</span>
              </div>
      
              <div class="example-content">
                  <table class="table table-bordered">
                      <thead>
                          <tr>
                              <th>Breakpoint</th>
                              <th>Class</th>
                              <th>Max width</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr><td>Extra small</td><td><code>.container</code></td><td>100%</td></tr>
                          <tr><td>Small</td><td><code>.container-sm</code></td><td>540px</td></tr>
                          <tr><td>Medium</td><td><code>.container-md</code></td><td>720px</td></tr>
                          <tr><td>Large</td><td><code>.container-lg</code></td><td>960px</td></tr>
                          <tr><td>Extra large</td><td><code>.container-xl</code></td><td>1140px</td></tr>
                          <tr><td>XXL</td><td><code>.container-xxl</code></td><td>1320px</td></tr>
                      </tbody>
                  </table>
              </div>
      
              <div class="example-footer mt-4">
                  <p>💡 Containers are required when using the grid system, unless you're using a full-width layout with <code>.container-fluid</code>.</p>
              </div>
          </div>
        `
      }
,grid: {
    title: "Grid System",
    subtitle: "Use Bootstrap's powerful mobile-first flexbox grid to build layouts of all shapes and sizes.",
    breadcrumb: ["Layout", "Grid"],
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>Auto-layout Columns</span>
              <button class="btn-copy" onclick="copyCode('grid-auto')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col bg-primary text-white p-3">1 of 2</div>
                      <div class="col bg-secondary text-white p-3">2 of 2</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="grid-auto">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col bg-primary text-white p-3"&gt;1 of 2&lt;/div&gt;
      &lt;div class="col bg-secondary text-white p-3"&gt;2 of 2&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Set Column Widths</span>
              <button class="btn-copy" onclick="copyCode('grid-fixed')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col-4 bg-warning p-3">col-4</div>
                      <div class="col-8 bg-success text-white p-3">col-8</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="grid-fixed">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-4 bg-warning p-3"&gt;col-4&lt;/div&gt;
      &lt;div class="col-8 bg-success text-white p-3"&gt;col-8&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Responsive Grid Columns</span>
              <button class="btn-copy" onclick="copyCode('grid-responsive')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col-md-6 bg-info p-3">col-md-6</div>
                      <div class="col-md-6 bg-danger text-white p-3">col-md-6</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="grid-responsive">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-md-6 bg-info p-3"&gt;col-md-6&lt;/div&gt;
      &lt;div class="col-md-6 bg-danger text-white p-3"&gt;col-md-6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Nesting Columns</span>
              <button class="btn-copy" onclick="copyCode('grid-nested')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col-6 bg-light p-3">
                          Level 1: col-6
                          <div class="row">
                              <div class="col-6 bg-warning p-2">Level 2: col-6</div>
                              <div class="col-6 bg-success text-white p-2">Level 2: col-6</div>
                          </div>
                      </div>
                      <div class="col-6 bg-dark text-white p-3">Level 1: col-6</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="grid-nested">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-6 bg-light p-3"&gt;
        Level 1: col-6
        &lt;div class="row"&gt;
          &lt;div class="col-6 bg-warning p-2"&gt;Level 2: col-6&lt;/div&gt;
          &lt;div class="col-6 bg-success text-white p-2"&gt;Level 2: col-6&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-6 bg-dark text-white p-3"&gt;Level 1: col-6&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getGridCode())">
              <i class="fas fa-plus"></i> Insert Grid Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('columns')">
              <i class="fas fa-columns"></i> View Columns
          </button>
      </div>
    `
  }
,gutters: {
    title: "Gutters",
    subtitle: "Control the space between columns with Bootstrap’s responsive gutter classes. Gutters are the padding between your columns.",
    breadcrumb: ["Layout", "Gutters"],
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>Default Gutters</span>
              <button class="btn-copy" onclick="copyCode('default-gutters')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col bg-primary text-white p-3">Column 1</div>
                      <div class="col bg-secondary text-white p-3">Column 2</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="default-gutters">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col bg-primary text-white p-3"&gt;Column 1&lt;/div&gt;
      &lt;div class="col bg-secondary text-white p-3"&gt;Column 2&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>No Gutters</span>
              <button class="btn-copy" onclick="copyCode('no-gutters')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row g-0">
                      <div class="col bg-warning text-dark p-3 border">Column 1</div>
                      <div class="col bg-info text-dark p-3 border">Column 2</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="no-gutters">&lt;div class="container text-center"&gt;
    &lt;div class="row g-0"&gt;
      &lt;div class="col bg-warning text-dark p-3 border"&gt;Column 1&lt;/div&gt;
      &lt;div class="col bg-info text-dark p-3 border"&gt;Column 2&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Horizontal Gutters Only</span>
              <button class="btn-copy" onclick="copyCode('gx-only')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row gx-5">
                      <div class="col bg-danger text-white p-3">Column 1</div>
                      <div class="col bg-dark text-white p-3">Column 2</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="gx-only">&lt;div class="container text-center"&gt;
    &lt;div class="row gx-5"&gt;
      &lt;div class="col bg-danger text-white p-3"&gt;Column 1&lt;/div&gt;
      &lt;div class="col bg-dark text-white p-3"&gt;Column 2&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Vertical Gutters Only</span>
              <button class="btn-copy" onclick="copyCode('gy-only')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row gy-5">
                      <div class="col-6 bg-success text-white p-3">Column 1</div>
                      <div class="col-6 bg-secondary text-white p-3">Column 2</div>
                      <div class="col-6 bg-success text-white p-3">Column 3</div>
                      <div class="col-6 bg-secondary text-white p-3">Column 4</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="gy-only">&lt;div class="container text-center"&gt;
    &lt;div class="row gy-5"&gt;
      &lt;div class="col-6 bg-success text-white p-3"&gt;Column 1&lt;/div&gt;
      &lt;div class="col-6 bg-secondary text-white p-3"&gt;Column 2&lt;/div&gt;
      &lt;div class="col-6 bg-success text-white p-3"&gt;Column 3&lt;/div&gt;
      &lt;div class="col-6 bg-secondary text-white p-3"&gt;Column 4&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getGuttersCode())">
              <i class="fas fa-plus"></i> Insert Gutter Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('utilities')">
              <i class="fas fa-cogs"></i> View Utilities
          </button>
      </div>
    `
  },reboot: {
    title: "Reboot",
    subtitle: "Reboot is a collection of element-specific CSS changes in Bootstrap that provides a consistent baseline to build upon.",
    breadcrumb: ["Content", "Reboot"],
    content: `
      <div class="example-note mb-4">
          <p>Reboot is Bootstrap’s custom reset that builds on <strong>Normalize.css</strong>. It provides a better foundation by unifying styles across browsers while preserving useful defaults.</p>
          <p>It includes enhancements for typography, forms, tables, images, and more to reduce cross-browser inconsistencies.</p>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Box-sizing and Margins</span>
              <button class="btn-copy" onclick="copyCode('reboot-box-sizing')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <p class="border p-3">All elements use <code>box-sizing: border-box</code> and margins are removed from body elements.</p>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="reboot-box-sizing">/* Applied globally */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Headings and Paragraphs</span>
              <button class="btn-copy" onclick="copyCode('reboot-headings')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <h1>Heading (h1)</h1>
              <p class="mb-0">Paragraph text with normalized line height and margin.</p>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="reboot-headings">&lt;h1&gt;Heading (h1)&lt;/h1&gt;
  &lt;p class="mb-0"&gt;Paragraph text with normalized line height and margin.&lt;/p&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Links and Images</span>
              <button class="btn-copy" onclick="copyCode('reboot-links')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <a href="#">Bootstrap link</a>
              <br><br>
              <img src="https://via.placeholder.com/100x50" class="img-fluid" alt="Placeholder">
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="reboot-links">&lt;a href="#"&gt;Bootstrap link&lt;/a&gt;
  
  &lt;img src="https://via.placeholder.com/100x50" class="img-fluid" alt="Placeholder"&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-note mt-4">
          <p>Additional adjustments include <code>html { line-height: 1.15; }</code>, improved <code>abbr</code>, <code>pre</code>, <code>code</code>, and <code>table</code> rendering, and normalized <code>hr</code> spacing.</p>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getRebootCode())">
              <i class="fas fa-plus"></i> Insert Reboot Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('typography')">
              <i class="fas fa-font"></i> View Typography
          </button>
      </div>
    `
  }

,    
  
  cssGrid: {
    title: "CSS Grid",
    subtitle: "Bootstrap includes support for CSS Grid layout, giving you full control over row and column positioning.",
    breadcrumb: ["Layout", "CSS Grid"],
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>CSS Grid Basic Example</span>
              <button class="btn-copy" onclick="copyCode('css-grid-basic')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="d-grid gap-3" style="grid-template-columns: auto auto;">
                  <div class="bg-primary text-white p-3">Item 1</div>
                  <div class="bg-secondary text-white p-3">Item 2</div>
                  <div class="bg-success text-white p-3">Item 3</div>
                  <div class="bg-danger text-white p-3">Item 4</div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="css-grid-basic">&lt;div class="d-grid gap-3" style="grid-template-columns: auto auto;"&gt;
    &lt;div class="bg-primary text-white p-3"&gt;Item 1&lt;/div&gt;
    &lt;div class="bg-secondary text-white p-3"&gt;Item 2&lt;/div&gt;
    &lt;div class="bg-success text-white p-3"&gt;Item 3&lt;/div&gt;
    &lt;div class="bg-danger text-white p-3"&gt;Item 4&lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Responsive CSS Grid</span>
              <button class="btn-copy" onclick="copyCode('css-grid-responsive')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="d-grid gap-3 d-sm-grid" style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));">
                  <div class="bg-info text-white p-3">Responsive 1</div>
                  <div class="bg-warning text-dark p-3">Responsive 2</div>
                  <div class="bg-dark text-white p-3">Responsive 3</div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="css-grid-responsive">&lt;div class="d-grid gap-3 d-sm-grid" style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));"&gt;
    &lt;div class="bg-info text-white p-3"&gt;Responsive 1&lt;/div&gt;
    &lt;div class="bg-warning text-dark p-3"&gt;Responsive 2&lt;/div&gt;
    &lt;div class="bg-dark text-white p-3"&gt;Responsive 3&lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-note mt-4">
          <p>Use the <code>d-grid</code> class along with <code>gap-*</code> utilities and inline <code>grid-template-*</code> styles for full control.</p>
          <p>For advanced layout needs, CSS Grid is perfect for defining row/column spans, automatic fills, and nested grids.</p>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getCSSGridCode())">
              <i class="fas fa-plus"></i> Insert CSS Grid Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('content')">
              <i class="fas fa-heading"></i> View Content Section
          </button>
      </div>
    `
  }
  
,zIndex: {
    title: "Z-index",
    subtitle: "Use Bootstrap’s z-index utilities to manage the stack order of elements easily with predefined classes.",
    breadcrumb: ["Utilities", "Z-index"],
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>Default Z-index Utilities</span>
              <button class="btn-copy" onclick="copyCode('zindex-default')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content position-relative" style="height: 200px;">
              <div class="position-absolute bg-primary text-white p-3 z-0" style="top: 20px; left: 20px;">z-0</div>
              <div class="position-absolute bg-success text-white p-3 z-1" style="top: 40px; left: 40px;">z-1</div>
              <div class="position-absolute bg-danger text-white p-3 z-2" style="top: 60px; left: 60px;">z-2</div>
              <div class="position-absolute bg-warning text-dark p-3 z-3" style="top: 80px; left: 80px;">z-3</div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="zindex-default">&lt;div class="position-relative" style="height: 200px;"&gt;
    &lt;div class="position-absolute bg-primary text-white p-3 z-0" style="top: 20px; left: 20px;"&gt;z-0&lt;/div&gt;
    &lt;div class="position-absolute bg-success text-white p-3 z-1" style="top: 40px; left: 40px;"&gt;z-1&lt;/div&gt;
    &lt;div class="position-absolute bg-danger text-white p-3 z-2" style="top: 60px; left: 60px;"&gt;z-2&lt;/div&gt;
    &lt;div class="position-absolute bg-warning text-dark p-3 z-3" style="top: 80px; left: 80px;"&gt;z-3&lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Z-index Auto</span>
              <button class="btn-copy" onclick="copyCode('zindex-auto')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content position-relative" style="height: 100px;">
              <div class="position-absolute bg-info text-white p-3 z-auto" style="top: 10px; left: 10px;">z-auto</div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="zindex-auto">&lt;div class="position-relative" style="height: 100px;"&gt;
    &lt;div class="position-absolute bg-info text-white p-3 z-auto" style="top: 10px; left: 10px;"&gt;z-auto&lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-note mt-4">
          <p><strong>Available classes:</strong></p>
          <ul>
              <li><code>.z-0</code> → <code>z-index: 0;</code></li>
              <li><code>.z-1</code> → <code>z-index: 1;</code></li>
              <li><code>.z-2</code> → <code>z-index: 2;</code></li>
              <li><code>.z-3</code> → <code>z-index: 3;</code></li>
              <li><code>.z-auto</code> → <code>z-index: auto;</code></li>
          </ul>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getZIndexCode())">
              <i class="fas fa-plus"></i> Insert Z-index Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('css-grid')">
              <i class="fas fa-th-large"></i> View CSS Grid
          </button>
      </div>
    `
  }
      
,columns: {
    title: "Columns",
    subtitle: "Bootstrap’s grid columns support responsive sizing, auto-width, equal-width, and nesting capabilities.",
    breadcrumb: ["Layout", "Columns"],
    content: `
      <div class="example-container">
          <div class="example-header">
              <span>Equal-Width Columns</span>
              <button class="btn-copy" onclick="copyCode('equal-columns')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col bg-primary text-white p-3">1 of 3</div>
                      <div class="col bg-secondary text-white p-3">2 of 3</div>
                      <div class="col bg-success text-white p-3">3 of 3</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="equal-columns">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col bg-primary text-white p-3"&gt;1 of 3&lt;/div&gt;
      &lt;div class="col bg-secondary text-white p-3"&gt;2 of 3&lt;/div&gt;
      &lt;div class="col bg-success text-white p-3"&gt;3 of 3&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Setting Column Sizes</span>
              <button class="btn-copy" onclick="copyCode('fixed-columns')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col-3 bg-warning p-3">col-3</div>
                      <div class="col-6 bg-info p-3">col-6</div>
                      <div class="col-3 bg-danger text-white p-3">col-3</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="fixed-columns">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-3 bg-warning p-3"&gt;col-3&lt;/div&gt;
      &lt;div class="col-6 bg-info p-3"&gt;col-6&lt;/div&gt;
      &lt;div class="col-3 bg-danger text-white p-3"&gt;col-3&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Responsive Columns</span>
              <button class="btn-copy" onclick="copyCode('responsive-columns')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col-sm-8 bg-light p-3 border">col-sm-8</div>
                      <div class="col-sm-4 bg-dark text-white p-3 border">col-sm-4</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="responsive-columns">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-sm-8 bg-light p-3 border"&gt;col-sm-8&lt;/div&gt;
      &lt;div class="col-sm-4 bg-dark text-white p-3 border"&gt;col-sm-4&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Nesting Columns</span>
              <button class="btn-copy" onclick="copyCode('nested-columns')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="container text-center">
                  <div class="row">
                      <div class="col-8 bg-info p-3">
                          col-8
                          <div class="row">
                              <div class="col-6 bg-warning p-2">Nested col-6</div>
                              <div class="col-6 bg-danger text-white p-2">Nested col-6</div>
                          </div>
                      </div>
                      <div class="col-4 bg-success text-white p-3">col-4</div>
                  </div>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="nested-columns">&lt;div class="container text-center"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-8 bg-info p-3"&gt;
        col-8
        &lt;div class="row"&gt;
          &lt;div class="col-6 bg-warning p-2"&gt;Nested col-6&lt;/div&gt;
          &lt;div class="col-6 bg-danger text-white p-2"&gt;Nested col-6&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-4 bg-success text-white p-3"&gt;col-4&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getColumnsCode())">
              <i class="fas fa-plus"></i> Insert Columns Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('gutters')">
              <i class="fas fa-columns"></i> View Gutters
          </button>
      </div>
    `
  }
    ,typography: {
        title: "Typography",
        subtitle: "Bootstrap’s typography provides a solid foundation with sensible defaults for headings, paragraphs, and more.",
        breadcrumb: ["Content", "Typography"],
        content: `
          <div class="example-note mb-4">
              <p>Bootstrap uses system fonts by default and provides consistent styling for all textual content with utilities for alignment, weight, size, spacing, and more.</p>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Headings</span>
                  <button class="btn-copy" onclick="copyCode('typography-headings')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <h1>h1. Bootstrap heading</h1>
                  <h2>h2. Bootstrap heading</h2>
                  <h3>h3. Bootstrap heading</h3>
                  <h4>h4. Bootstrap heading</h4>
                  <h5>h5. Bootstrap heading</h5>
                  <h6>h6. Bootstrap heading</h6>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="typography-headings">&lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;
      &lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;
      &lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;
      &lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;
      &lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;
      &lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Display Headings</span>
                  <button class="btn-copy" onclick="copyCode('typography-display')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <h1 class="display-1">Display 1</h1>
                  <h1 class="display-2">Display 2</h1>
                  <h1 class="display-3">Display 3</h1>
                  <h1 class="display-4">Display 4</h1>
                  <h1 class="display-5">Display 5</h1>
                  <h1 class="display-6">Display 6</h1>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="typography-display">&lt;h1 class="display-1"&gt;Display 1&lt;/h1&gt;
      &lt;h1 class="display-2"&gt;Display 2&lt;/h1&gt;
      &lt;h1 class="display-3"&gt;Display 3&lt;/h1&gt;
      &lt;h1 class="display-4"&gt;Display 4&lt;/h1&gt;
      &lt;h1 class="display-5"&gt;Display 5&lt;/h1&gt;
      &lt;h1 class="display-6"&gt;Display 6&lt;/h1&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Lead and Small Text</span>
                  <button class="btn-copy" onclick="copyCode('typography-lead')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
                  <p>This is <small>small text</small> for fine print or secondary info.</p>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="typography-lead">&lt;p class="lead"&gt;This is a lead paragraph. It stands out from regular paragraphs.&lt;/p&gt;
      &lt;p&gt;This is &lt;small&gt;small text&lt;/small&gt; for fine print or secondary info.&lt;/p&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-note mt-4">
              <p>Other features include text alignment, transform, weight, font size utilities, and inline elements like <code>&lt;mark&gt;</code>, <code>&lt;abbr&gt;</code>, <code>&lt;blockquote&gt;</code>, and <code>&lt;code&gt;</code>.</p>
          </div>
      
          <div class="quick-actions">
              <button class="btn btn-primary" onclick="insertToParent(getTypographyCode())">
                  <i class="fas fa-plus"></i> Insert Typography Code
              </button>
              <button class="btn btn-outline-primary" onclick="showContent('images')">
                  <i class="fas fa-image"></i> View Images
              </button>
          </div>
        `
      }  ,
      images: {
        title: "Images",
        subtitle: "Responsive and styled image utilities with classes like .img-fluid, .rounded, and more.",
        breadcrumb: ["Content", "Images"],
        content: `
          <div class="example-note mb-4">
              <p>Bootstrap includes image styles for responsive behavior, shapes, and alignment. Easily control width, height, and appearance using utility classes.</p>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Responsive Images</span>
                  <button class="btn-copy" onclick="copyCode('images-responsive')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <img src="https://via.placeholder.com/300x150" class="img-fluid" alt="Responsive image">
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="images-responsive">&lt;img src="https://via.placeholder.com/300x150" class="img-fluid" alt="Responsive image"&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Image Shapes</span>
                  <button class="btn-copy" onclick="copyCode('images-shapes')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content d-flex gap-3 flex-wrap">
                  <img src="https://via.placeholder.com/100" class="rounded" alt="Rounded">
                  <img src="https://via.placeholder.com/100" class="rounded-circle" alt="Circle">
                  <img src="https://via.placeholder.com/100" class="img-thumbnail" alt="Thumbnail">
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="images-shapes">&lt;img src="https://via.placeholder.com/100" class="rounded" alt="Rounded"&gt;
      &lt;img src="https://via.placeholder.com/100" class="rounded-circle" alt="Circle"&gt;
      &lt;img src="https://via.placeholder.com/100" class="img-thumbnail" alt="Thumbnail"&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Image Alignment</span>
                  <button class="btn-copy" onclick="copyCode('images-align')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content text-center">
                  <img src="https://via.placeholder.com/150x100" class="mx-auto d-block" alt="Centered image">
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="images-align">&lt;img src="https://via.placeholder.com/150x100" class="mx-auto d-block" alt="Centered image"&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-note mt-4">
              <p>Use utility classes like <code>.img-fluid</code>, <code>.rounded</code>, <code>.rounded-circle</code>, <code>.img-thumbnail</code>, and alignment helpers to style images responsively and beautifully.</p>
          </div>
      
          <div class="quick-actions">
              <button class="btn btn-primary" onclick="insertToParent(getImageCode())">
                  <i class="fas fa-plus"></i> Insert Image Code
              </button>
              <button class="btn btn-outline-primary" onclick="showContent('tables')">
                  <i class="fas fa-table"></i> View Tables
              </button>
          </div>
        `
      }
,tables: {
    title: "Tables",
    subtitle: "Bootstrap provides customizable table styles and responsive table containers.",
    breadcrumb: ["Content", "Tables"],
    content: `
      <div class="example-note mb-4">
          <p>Use Bootstrap’s table classes to style tables with borders, stripes, hover effects, responsiveness, and more.</p>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Basic Table</span>
              <button class="btn-copy" onclick="copyCode('tables-basic')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <table class="table">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th>1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                      </tr>
                      <tr>
                          <th>2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="tables-basic">&lt;table class="table"&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;#&lt;/th&gt;
        &lt;th&gt;First&lt;/th&gt;
        &lt;th&gt;Last&lt;/th&gt;
        &lt;th&gt;Handle&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;th&gt;1&lt;/th&gt;
        &lt;td&gt;Mark&lt;/td&gt;
        &lt;td&gt;Otto&lt;/td&gt;
        &lt;td&gt;@mdo&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;2&lt;/th&gt;
        &lt;td&gt;Jacob&lt;/td&gt;
        &lt;td&gt;Thornton&lt;/td&gt;
        &lt;td&gt;@fat&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Striped, Bordered, and Hover</span>
              <button class="btn-copy" onclick="copyCode('tables-striped')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <table class="table table-striped table-bordered table-hover">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <th>1</th>
                          <td>Anna</td>
                          <td>Smith</td>
                          <td>@anna</td>
                      </tr>
                      <tr>
                          <th>2</th>
                          <td>John</td>
                          <td>Doe</td>
                          <td>@john</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="tables-striped">&lt;table class="table table-striped table-bordered table-hover"&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;#&lt;/th&gt;
        &lt;th&gt;First&lt;/th&gt;
        &lt;th&gt;Last&lt;/th&gt;
        &lt;th&gt;Handle&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;th&gt;1&lt;/th&gt;
        &lt;td&gt;Anna&lt;/td&gt;
        &lt;td&gt;Smith&lt;/td&gt;
        &lt;td&gt;@anna&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;2&lt;/th&gt;
        &lt;td&gt;John&lt;/td&gt;
        &lt;td&gt;Doe&lt;/td&gt;
        &lt;td&gt;@john&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Responsive Table</span>
              <button class="btn-copy" onclick="copyCode('tables-responsive')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <div class="table-responsive">
                  <table class="table">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Column 1</th>
                              <th>Column 2</th>
                              <th>Column 3</th>
                              <th>Column 4</th>
                              <th>Column 5</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <th>1</th>
                              <td>Data</td>
                              <td>Data</td>
                              <td>Data</td>
                              <td>Data</td>
                              <td>Data</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="tables-responsive">&lt;div class="table-responsive"&gt;
    &lt;table class="table"&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th&gt;#&lt;/th&gt;
          &lt;th&gt;Column 1&lt;/th&gt;
          &lt;th&gt;Column 2&lt;/th&gt;
          &lt;th&gt;Column 3&lt;/th&gt;
          &lt;th&gt;Column 4&lt;/th&gt;
          &lt;th&gt;Column 5&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr&gt;
          &lt;th&gt;1&lt;/th&gt;
          &lt;td&gt;Data&lt;/td&gt;
          &lt;td&gt;Data&lt;/td&gt;
          &lt;td&gt;Data&lt;/td&gt;
          &lt;td&gt;Data&lt;/td&gt;
          &lt;td&gt;Data&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-note mt-4">
          <p>Combine modifiers like <code>.table-striped</code>, <code>.table-bordered</code>, <code>.table-hover</code>, and wrap with <code>.table-responsive</code> for full adaptability.</p>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getTableCode())">
              <i class="fas fa-plus"></i> Insert Table Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('figures')">
              <i class="fas fa-image"></i> View Figures
          </button>
      </div>
    `
  }
,
figures: {
    title: "Figures",
    subtitle: "Use Bootstrap’s figure component for displaying images with optional captions.",
    breadcrumb: ["Content", "Figures"],
    content: `
      <div class="example-note mb-4">
          <p>The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements are used to wrap visual content and provide captions, with Bootstrap’s <code>.figure</code> classes enhancing their layout and styling.</p>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Default Figure</span>
              <button class="btn-copy" onclick="copyCode('figure-default')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content text-center">
              <figure class="figure">
                  <img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="A placeholder image">
                  <figcaption class="figure-caption">A caption for the above image.</figcaption>
              </figure>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="figure-default">&lt;figure class="figure"&gt;
    &lt;img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="A placeholder image"&gt;
    &lt;figcaption class="figure-caption"&gt;A caption for the above image.&lt;/figcaption&gt;
  &lt;/figure&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Right-Aligned Caption</span>
              <button class="btn-copy" onclick="copyCode('figure-caption-right')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content text-center">
              <figure class="figure">
                  <img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="A placeholder image">
                  <figcaption class="figure-caption text-end">Right-aligned caption.</figcaption>
              </figure>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="figure-caption-right">&lt;figure class="figure"&gt;
    &lt;img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="A placeholder image"&gt;
    &lt;figcaption class="figure-caption text-end"&gt;Right-aligned caption.&lt;/figcaption&gt;
  &lt;/figure&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-note mt-4">
          <p>Use the <code>.figure</code> class for styling and spacing, <code>.figure-img</code> for image responsiveness, and <code>.figure-caption</code> for captions with text utilities for alignment.</p>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getFigureCode())">
              <i class="fas fa-plus"></i> Insert Figure Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('forms')">
              <i class="fas fa-pen"></i> View Forms
          </button>
      </div>
    `
  }
,formControl: {
    title: "Form control",
    subtitle: "Bootstrap’s form controls are flexible, extensible inputs for user data with consistent styling across browsers.",
    breadcrumb: ["Forms", "Form control"],
    content: `
      <div class="example-note mb-4">
          <p>Form controls in Bootstrap include inputs, textareas, and selects, which are fully customizable and responsive. Apply <code>.form-control</code> to text-based inputs.</p>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Text Input</span>
              <button class="btn-copy" onclick="copyCode('form-text-input')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <input type="text" class="form-control" placeholder="Enter your name">
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="form-text-input">&lt;input type="text" class="form-control" placeholder="Enter your name"&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Email Input</span>
              <button class="btn-copy" onclick="copyCode('form-email-input')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <input type="email" class="form-control" placeholder="Enter email">
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="form-email-input">&lt;input type="email" class="form-control" placeholder="Enter email"&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Textarea</span>
              <button class="btn-copy" onclick="copyCode('form-textarea')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <textarea class="form-control" rows="3" placeholder="Write your message here"></textarea>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="form-textarea">&lt;textarea class="form-control" rows="3" placeholder="Write your message here"&gt;&lt;/textarea&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-container">
          <div class="example-header">
              <span>Readonly</span>
              <button class="btn-copy" onclick="copyCode('form-readonly')"><i class="fas fa-copy"></i> Copy</button>
          </div>
          <div class="example-content">
              <input type="text" class="form-control" value="Readonly value" readonly>
          </div>
          <div class="code-container">
              <div class="code-content">
                  <pre id="form-readonly">&lt;input type="text" class="form-control" value="Readonly value" readonly&gt;</pre>
              </div>
          </div>
      </div>
  
      <div class="example-note mt-4">
          <p>Bootstrap provides sizing classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>, and states such as <code>readonly</code> or <code>disabled</code> for enhanced control.</p>
      </div>
  
      <div class="quick-actions">
          <button class="btn btn-primary" onclick="insertToParent(getFormControlCode())">
              <i class="fas fa-plus"></i> Insert Form Control Code
          </button>
          <button class="btn btn-outline-primary" onclick="showContent('select')">
              <i class="fas fa-caret-down"></i> View Select
          </button>
      </div>
    `
  }
    
    ,select: {
        title: "Select",
        subtitle: "Customize the native <select> element with Bootstrap’s form styles and responsive design.",
        breadcrumb: ["Forms", "Select"],
        content: `
          <div class="example-note mb-4">
              <p>Use <code>.form-select</code> to style <code>&lt;select&gt;</code> elements consistently across browsers. Bootstrap offers support for sizing and disabled states.</p>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Default Select</span>
                  <button class="btn-copy" onclick="copyCode('select-default')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <select class="form-select">
                      <option selected>Open this select menu</option>
                      <option value="1">Option One</option>
                      <option value="2">Option Two</option>
                      <option value="3">Option Three</option>
                  </select>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="select-default">&lt;select class="form-select"&gt;
        &lt;option selected&gt;Open this select menu&lt;/option&gt;
        &lt;option value="1"&gt;Option One&lt;/option&gt;
        &lt;option value="2"&gt;Option Two&lt;/option&gt;
        &lt;option value="3"&gt;Option Three&lt;/option&gt;
      &lt;/select&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Sizing</span>
                  <button class="btn-copy" onclick="copyCode('select-sizing')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content d-flex flex-column gap-2">
                  <select class="form-select form-select-lg">
                      <option selected>Large select</option>
                      <option>...</option>
                  </select>
      
                  <select class="form-select">
                      <option selected>Default select</option>
                      <option>...</option>
                  </select>
      
                  <select class="form-select form-select-sm">
                      <option selected>Small select</option>
                      <option>...</option>
                  </select>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="select-sizing">&lt;select class="form-select form-select-lg"&gt;
        &lt;option selected&gt;Large select&lt;/option&gt;
      &lt;/select&gt;
      
      &lt;select class="form-select"&gt;
        &lt;option selected&gt;Default select&lt;/option&gt;
      &lt;/select&gt;
      
      &lt;select class="form-select form-select-sm"&gt;
        &lt;option selected&gt;Small select&lt;/option&gt;
      &lt;/select&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Disabled</span>
                  <button class="btn-copy" onclick="copyCode('select-disabled')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <select class="form-select" disabled>
                      <option>Disabled select</option>
                  </select>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="select-disabled">&lt;select class="form-select" disabled&gt;
        &lt;option&gt;Disabled select&lt;/option&gt;
      &lt;/select&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-note mt-4">
              <p>Enhance native dropdowns using <code>.form-select</code> for consistent spacing, padding, and appearance. Combine with sizing utilities to adjust form layout.</p>
          </div>
      
          <div class="quick-actions">
              <button class="btn btn-primary" onclick="insertToParent(getSelectCode())">
                  <i class="fas fa-plus"></i> Insert Select Code
              </button>
              <button class="btn btn-outline-primary" onclick="showContent('checksRadios')">
                  <i class="fas fa-check-square"></i> View Checks & Radios
              </button>
          </div>
        `
      },
      checksRadios: {
        title: "Checks & Radios",
        subtitle: "Custom checkboxes and radio buttons with full accessibility and flexible layouts.",
        breadcrumb: ["Forms", "Checks & radios"],
        content: `
          <div class="example-note mb-4">
              <p>Bootstrap customizes <code>&lt;input type="checkbox"&gt;</code> and <code>&lt;input type="radio"&gt;</code> with <code>.form-check</code> wrappers for consistent style and structure.</p>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Checkbox</span>
                  <button class="btn-copy" onclick="copyCode('checkbox-basic')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                      <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>
                  </div>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="checkbox-basic">&lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"&gt;
        &lt;label class="form-check-label" for="flexCheckDefault"&gt;
          Default checkbox
        &lt;/label&gt;
      &lt;/div&gt;
      
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked&gt;
        &lt;label class="form-check-label" for="flexCheckChecked"&gt;
          Checked checkbox
        &lt;/label&gt;
      &lt;/div&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Radio</span>
                  <button class="btn-copy" onclick="copyCode('radio-basic')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">Checked radio</label>
                  </div>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="radio-basic">&lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"&gt;
        &lt;label class="form-check-label" for="flexRadioDefault1"&gt;
          Default radio
        &lt;/label&gt;
      &lt;/div&gt;
      
      &lt;div class="form-check"&gt;
        &lt;input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked&gt;
        &lt;label class="form-check-label" for="flexRadioDefault2"&gt;
          Checked radio
        &lt;/label&gt;
      &lt;/div&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Inline</span>
                  <button class="btn-copy" onclick="copyCode('checkbox-inline')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                      <label class="form-check-label" for="inlineCheckbox1">1</label>
                  </div>
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                      <label class="form-check-label" for="inlineCheckbox2">2</label>
                  </div>
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                      <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                  </div>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="checkbox-inline">&lt;div class="form-check form-check-inline"&gt;
        &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"&gt;
        &lt;label class="form-check-label" for="inlineCheckbox1"&gt;1&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="form-check form-check-inline"&gt;
        &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"&gt;
        &lt;label class="form-check-label" for="inlineCheckbox2"&gt;2&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class="form-check form-check-inline"&gt;
        &lt;input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled&gt;
        &lt;label class="form-check-label" for="inlineCheckbox3"&gt;3 (disabled)&lt;/label&gt;
      &lt;/div&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-note mt-4">
              <p>Use <code>.form-check-inline</code> for horizontal alignment, and apply <code>disabled</code> on both input and label when needed.</p>
          </div>
      
          <div class="quick-actions">
              <button class="btn btn-primary" onclick="insertToParent(getChecksRadiosCode())">
                  <i class="fas fa-plus"></i> Insert Checks/Radios Code
              </button>
              <button class="btn btn-outline-primary" onclick="showContent('range')">
                  <i class="fas fa-sliders-h"></i> View Range Input
              </button>
          </div>
        `
      },inputGroup: {
        title: "Input group",
        subtitle: "Extend form controls by adding text, buttons, or button groups on either side of textual inputs.",
        breadcrumb: ["Forms", "Input group"],
        content: `
          <div class="example-note mb-4">
              <p>Use <code>.input-group</code> to wrap inputs and add addons like text, icons, or buttons to create cohesive UI components.</p>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Text Addon</span>
                  <button class="btn-copy" onclick="copyCode('input-group-text')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">@</span>
                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                  </div>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="input-group-text">&lt;div class="input-group mb-3"&gt;
        &lt;span class="input-group-text" id="basic-addon1"&gt;@&lt;/span&gt;
        &lt;input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;
      &lt;/div&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Multiple Addons</span>
                  <button class="btn-copy" onclick="copyCode('input-group-multiple')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <div class="input-group mb-3">
                      <span class="input-group-text">$</span>
                      <span class="input-group-text">0.00</span>
                      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </div>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="input-group-multiple">&lt;div class="input-group mb-3"&gt;
        &lt;span class="input-group-text"&gt;$&lt;/span&gt;
        &lt;span class="input-group-text"&gt;0.00&lt;/span&gt;
        &lt;input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"&gt;
      &lt;/div&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Button Addon</span>
                  <button class="btn-copy" onclick="copyCode('input-group-button')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username">
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                  </div>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="input-group-button">&lt;div class="input-group mb-3"&gt;
        &lt;input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"&gt;
        &lt;button class="btn btn-outline-secondary" type="button" id="button-addon2"&gt;Button&lt;/button&gt;
      &lt;/div&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-note mt-4">
              <p>Combine input groups with utilities like sizing, spacing, and form validation to create user-friendly, interactive input components.</p>
          </div>
      
          <div class="quick-actions">
              <button class="btn btn-primary" onclick="insertToParent(getInputGroupCode())">
                  <i class="fas fa-plus"></i> Insert Input Group Code
              </button>
              <button class="btn btn-outline-primary" onclick="showContent('floatingLabels')">
                  <i class="fas fa-align-left"></i> View Floating Labels
              </button>
          </div>
        `
      }
      
      ,range: {
        title: "Range",
        subtitle: "Create custom range inputs using Bootstrap’s form-range class.",
        breadcrumb: ["Forms", "Range"],
        content: `
          <div class="example-note mb-4">
              <p>Bootstrap provides a custom-styled range input by applying <code>.form-range</code> to <code>&lt;input type="range"&gt;</code>. It's fully responsive and accessible.</p>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Default Range</span>
                  <button class="btn-copy" onclick="copyCode('range-default')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <input type="range" class="form-range" id="customRange1">
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="range-default">&lt;input type="range" class="form-range" id="customRange1"&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Disabled Range</span>
                  <button class="btn-copy" onclick="copyCode('range-disabled')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <input type="range" class="form-range" id="disabledRange" disabled>
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="range-disabled">&lt;input type="range" class="form-range" id="disabledRange" disabled&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Min & Max</span>
                  <button class="btn-copy" onclick="copyCode('range-minmax')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <input type="range" class="form-range" min="0" max="10" id="customRange2">
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="range-minmax">&lt;input type="range" class="form-range" min="0" max="10" id="customRange2"&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-container">
              <div class="example-header">
                  <span>Steps</span>
                  <button class="btn-copy" onclick="copyCode('range-steps')"><i class="fas fa-copy"></i> Copy</button>
              </div>
              <div class="example-content">
                  <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
              </div>
              <div class="code-container">
                  <div class="code-content">
                      <pre id="range-steps">&lt;input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"&gt;</pre>
                  </div>
              </div>
          </div>
      
          <div class="example-note mt-4">
              <p>Customize <code>min</code>, <code>max</code>, and <code>step</code> attributes to suit numeric needs. Add <code>disabled</code> for non-editable sliders.</p>
          </div>
      
          <div class="quick-actions">
              <button class="btn btn-primary" onclick="insertToParent(getRangeCode())">
                  <i class="fas fa-plus"></i> Insert Range Code
              </button>
              <button class="btn btn-outline-primary" onclick="showContent('inputGroup')">
                  <i class="fas fa-object-group"></i> View Input Group
              </button>
          </div>
        `
      },floatingLabels: {
        title: "Floating labels",
        subtitle: "Create beautiful, floating form labels with Bootstrap’s built-in form-floating class.",
        breadcrumb: ["Forms", "Floating labels"],
        content: `
          <div class="example-note mb-4">
            <p>Wrap inputs with <code>.form-floating</code> to enable floating labels. They work with text inputs, textareas, and selects.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Text Input</span>
              <button class="btn-copy" onclick="copyCode('floating-text')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
            </div>
            <div class="code-container">
              <div class="code-content">
                <pre id="floating-text">&lt;div class="form-floating mb-3"&gt;
        &lt;input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"&gt;
        &lt;label for="floatingInput"&gt;Email address&lt;/label&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Password Input</span>
              <button class="btn-copy" onclick="copyCode('floating-password')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <div class="code-container">
              <div class="code-content">
                <pre id="floating-password">&lt;div class="form-floating"&gt;
        &lt;input type="password" class="form-control" id="floatingPassword" placeholder="Password"&gt;
        &lt;label for="floatingPassword"&gt;Password&lt;/label&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Select Input</span>
              <button class="btn-copy" onclick="copyCode('floating-select')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Works with selects</label>
              </div>
            </div>
            <div class="code-container">
              <div class="code-content">
                <pre id="floating-select">&lt;div class="form-floating"&gt;
        &lt;select class="form-select" id="floatingSelect" aria-label="Floating label select example"&gt;
          &lt;option selected&gt;Open this select menu&lt;/option&gt;
          &lt;option value="1"&gt;One&lt;/option&gt;
          &lt;option value="2"&gt;Two&lt;/option&gt;
          &lt;option value="3"&gt;Three&lt;/option&gt;
        &lt;/select&gt;
        &lt;label for="floatingSelect"&gt;Works with selects&lt;/label&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Textarea</span>
              <button class="btn-copy" onclick="copyCode('floating-textarea')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
            </div>
            <div class="code-container">
              <div class="code-content">
                <pre id="floating-textarea">&lt;div class="form-floating"&gt;
        &lt;textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"&gt;&lt;/textarea&gt;
        &lt;label for="floatingTextarea"&gt;Comments&lt;/label&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Make sure each <code>.form-control</code> has a <code>placeholder</code> or value for floating label support. Use <code>form-floating</code> for sleek UX.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getFloatingLabelsCode())">
              <i class="fas fa-plus"></i> Insert Floating Label Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('formLayout')">
              <i class="fas fa-columns"></i> View Form Layout
            </button>
          </div>
        `
      }
      ,formLayout: {
        title: "Layout",
        subtitle: "Use Bootstrap grid and utilities to create responsive, flexible form layouts.",
        breadcrumb: ["Forms", "Layout"],
        content: `
          <div class="example-note mb-4">
            <p>Use the Bootstrap grid system or utility classes to structure form controls responsively across devices.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Form Grid</span>
              <button class="btn-copy" onclick="copyCode('form-grid')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">City</label>
                  <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">State</label>
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="inputZip">
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">Check me out</label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
              </form>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="form-grid">&lt;form class="row g-3"&gt;
        &lt;div class="col-md-6"&gt;
          &lt;label for="inputEmail4" class="form-label"&gt;Email&lt;/label&gt;
          &lt;input type="email" class="form-control" id="inputEmail4"&gt;
        &lt;/div&gt;
        &lt;div class="col-md-6"&gt;
          &lt;label for="inputPassword4" class="form-label"&gt;Password&lt;/label&gt;
          &lt;input type="password" class="form-control" id="inputPassword4"&gt;
        &lt;/div&gt;
        &lt;div class="col-12"&gt;
          &lt;label for="inputAddress" class="form-label"&gt;Address&lt;/label&gt;
          &lt;input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"&gt;
        &lt;/div&gt;
        &lt;div class="col-md-6"&gt;
          &lt;label for="inputCity" class="form-label"&gt;City&lt;/label&gt;
          &lt;input type="text" class="form-control" id="inputCity"&gt;
        &lt;/div&gt;
        &lt;div class="col-md-4"&gt;
          &lt;label for="inputState" class="form-label"&gt;State&lt;/label&gt;
          &lt;select id="inputState" class="form-select"&gt;
            &lt;option selected&gt;Choose...&lt;/option&gt;
            &lt;option&gt;...&lt;/option&gt;
          &lt;/select&gt;
        &lt;/div&gt;
        &lt;div class="col-md-2"&gt;
          &lt;label for="inputZip" class="form-label"&gt;Zip&lt;/label&gt;
          &lt;input type="text" class="form-control" id="inputZip"&gt;
        &lt;/div&gt;
        &lt;div class="col-12"&gt;
          &lt;div class="form-check"&gt;
            &lt;input class="form-check-input" type="checkbox" id="gridCheck"&gt;
            &lt;label class="form-check-label" for="gridCheck"&gt;Check me out&lt;/label&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="col-12"&gt;
          &lt;button type="submit" class="btn btn-primary"&gt;Sign in&lt;/button&gt;
        &lt;/div&gt;
      &lt;/form&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Use grid classes like <code>.row</code> and <code>.col-md-6</code> to build responsive form layouts easily.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getFormLayoutCode())">
              <i class="fas fa-plus"></i> Insert Form Layout Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('validation')">
              <i class="fas fa-check-circle"></i> View Validation
            </button>
          </div>
        `
      },colorBackground: {
        title: "Color & Background",
        subtitle: "Quickly set text and background colors using Bootstrap’s contextual classes.",
        breadcrumb: ["Helpers", "Color & Background"],
        content: `
          <div class="example-note mb-4">
            <p>Use text and background color utility classes to style elements with semantic meaning or visual emphasis.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Text Colors</span>
              <button class="btn-copy" onclick="copyCode('text-colors')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <p class="text-primary">.text-primary</p>
              <p class="text-secondary">.text-secondary</p>
              <p class="text-success">.text-success</p>
              <p class="text-danger">.text-danger</p>
              <p class="text-warning">.text-warning</p>
              <p class="text-info">.text-info</p>
              <p class="text-light bg-dark">.text-light</p>
              <p class="text-dark">.text-dark</p>
              <p class="text-muted">.text-muted</p>
              <p class="text-white bg-dark">.text-white</p>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="text-colors">&lt;p class="text-primary"&gt;.text-primary&lt;/p&gt;
      &lt;p class="text-secondary"&gt;.text-secondary&lt;/p&gt;
      &lt;p class="text-success"&gt;.text-success&lt;/p&gt;
      &lt;p class="text-danger"&gt;.text-danger&lt;/p&gt;
      &lt;p class="text-warning"&gt;.text-warning&lt;/p&gt;
      &lt;p class="text-info"&gt;.text-info&lt;/p&gt;
      &lt;p class="text-light bg-dark"&gt;.text-light&lt;/p&gt;
      &lt;p class="text-dark"&gt;.text-dark&lt;/p&gt;
      &lt;p class="text-muted"&gt;.text-muted&lt;/p&gt;
      &lt;p class="text-white bg-dark"&gt;.text-white&lt;/p&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Background Colors</span>
              <button class="btn-copy" onclick="copyCode('bg-colors')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
              <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
              <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
              <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
              <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
              <div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
              <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
              <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
              <div class="p-3 mb-2 bg-body text-dark">.bg-body</div>
              <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
              <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="bg-colors">&lt;div class="p-3 mb-2 bg-primary text-white"&gt;.bg-primary&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-secondary text-white"&gt;.bg-secondary&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-success text-white"&gt;.bg-success&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-danger text-white"&gt;.bg-danger&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-warning text-dark"&gt;.bg-warning&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-info text-dark"&gt;.bg-info&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-light text-dark"&gt;.bg-light&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-dark text-white"&gt;.bg-dark&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-body text-dark"&gt;.bg-body&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-white text-dark"&gt;.bg-white&lt;/div&gt;
      &lt;div class="p-3 mb-2 bg-transparent text-dark"&gt;.bg-transparent&lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Combine background and text utility classes for expressive UI styling. Use <code>.bg-*</code> and <code>.text-*</code> together when needed.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getColorBackgroundCode())">
              <i class="fas fa-plus"></i> Insert Color/Background Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('coloredLinks')">
              <i class="fas fa-link"></i> View Colored Links
            </button>
          </div>
        `
      }
      
      ,validation: {
        title: "Validation",
        subtitle: "Provide valuable, actionable feedback to your users with HTML5 form validation, custom messages, and styles.",
        breadcrumb: ["Forms", "Validation"],
        content: `
          <div class="example-note mb-4">
            <p>Use Bootstrap’s custom validation styles, which are applied using classes like <code>.is-valid</code> and <code>.is-invalid</code> along with <code>.valid-feedback</code> or <code>.invalid-feedback</code>.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Custom Styles</span>
              <button class="btn-copy" onclick="copyCode('custom-validation')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">First name</label>
                  <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustomUsername" class="form-label">Username</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom03" class="form-label">City</label>
                  <input type="text" class="form-control" id="validationCustom03" required>
                  <div class="invalid-feedback">Please provide a valid city.</div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom04" class="form-label">State</label>
                  <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <div class="invalid-feedback">Please select a valid state.</div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom05" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="validationCustom05" required>
                  <div class="invalid-feedback">Please provide a valid zip.</div>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="custom-validation">&lt;form class="row g-3 needs-validation" novalidate&gt;
        &lt;div class="col-md-4"&gt;
          &lt;label for="validationCustom01" class="form-label"&gt;First name&lt;/label&gt;
          &lt;input type="text" class="form-control" id="validationCustom01" value="Mark" required&gt;
          &lt;div class="valid-feedback"&gt;Looks good!&lt;/div&gt;
        &lt;/div&gt;
        ...
        &lt;div class="col-12"&gt;
          &lt;button class="btn btn-primary" type="submit"&gt;Submit form&lt;/button&gt;
        &lt;/div&gt;
      &lt;/form&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>To activate custom validation, use <code>novalidate</code> on the form and apply <code>.needs-validation</code>. Add JavaScript to check for validity on submit.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getValidationCode())">
              <i class="fas fa-plus"></i> Insert Validation Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('accordion')">
              <i class="fas fa-bars"></i> View Accordion Component
            </button>
          </div>
        `
      },stacks: {
        title: "Stacks",
        subtitle: "Use stack utilities to vertically or horizontally space content with a consistent gap using flexbox.",
        breadcrumb: ["Helpers", "Stacks"],
        content: `
          <div class="example-note mb-4">
            <p>Stack classes <code>.vstack</code> and <code>.hstack</code> let you arrange elements vertically or horizontally with equal spacing using flexbox and gap utilities.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Vertical Stack (.vstack)</span>
              <button class="btn-copy" onclick="copyCode('vstack')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="vstack gap-3">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-outline-secondary">Cancel</button>
              </div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="vstack">&lt;div class="vstack gap-3"&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;
        &lt;button type="button" class="btn btn-outline-secondary"&gt;Cancel&lt;/button&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container mt-4">
            <div class="example-header">
              <span>Horizontal Stack (.hstack)</span>
              <button class="btn-copy" onclick="copyCode('hstack')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="hstack gap-3">
                <input class="form-control me-auto" type="text" placeholder="Add your item..." aria-label="Add your item">
                <button type="button" class="btn btn-secondary">Submit</button>
                <div class="vr"></div>
                <button type="button" class="btn btn-outline-danger">Reset</button>
              </div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="hstack">&lt;div class="hstack gap-3"&gt;
        &lt;input class="form-control me-auto" type="text" placeholder="Add your item..." aria-label="Add your item"&gt;
        &lt;button type="button" class="btn btn-secondary"&gt;Submit&lt;/button&gt;
        &lt;div class="vr"&gt;&lt;/div&gt;
        &lt;button type="button" class="btn btn-outline-danger"&gt;Reset&lt;/button&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Use Bootstrap's spacing utilities like <code>gap-*</code>, <code>me-auto</code>, or <code>vr</code> to fine-tune your stack layouts.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getStacksCode())">
              <i class="fas fa-plus"></i> Insert Stack Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('stretchedLink')">
              <i class="fas fa-external-link-alt"></i> View Stretched Link
            </button>
          </div>
        `
      },buttons: {
        title: "Buttons",
        subtitle: "Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
        breadcrumb: ["Components", "Buttons"],
        content: `
          <div class="example-container">
            <div class="example-header">
              <span>Button Examples</span>
              <button class="btn-copy" onclick="copyCode('button-examples')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
              <button type="button" class="btn btn-link">Link</button>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="button-examples">&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary"&gt;Secondary&lt;/button&gt;
      &lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;
      &lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;
      &lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;
      &lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;
      &lt;button type="button" class="btn btn-light"&gt;Light&lt;/button&gt;
      &lt;button type="button" class="btn btn-dark"&gt;Dark&lt;/button&gt;
      &lt;button type="button" class="btn btn-link"&gt;Link&lt;/button&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Outline Buttons</span>
              <button class="btn-copy" onclick="copyCode('outline-buttons')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="outline-buttons">&lt;button type="button" class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;
      &lt;button type="button" class="btn btn-outline-secondary"&gt;Secondary&lt;/button&gt;
      &lt;button type="button" class="btn btn-outline-success"&gt;Success&lt;/button&gt;
      &lt;button type="button" class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;
      &lt;button type="button" class="btn btn-outline-warning"&gt;Warning&lt;/button&gt;
      &lt;button type="button" class="btn btn-outline-info"&gt;Info&lt;/button&gt;
      &lt;button type="button" class="btn btn-outline-dark"&gt;Dark&lt;/button&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Button Sizes</span>
              <button class="btn-copy" onclick="copyCode('button-sizes')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <button type="button" class="btn btn-primary btn-lg">Large button</button>
              <button type="button" class="btn btn-secondary btn-lg">Large button</button>
              <br><br>
              <button type="button" class="btn btn-primary">Default button</button>
              <button type="button" class="btn btn-secondary">Default button</button>
              <br><br>
              <button type="button" class="btn btn-primary btn-sm">Small button</button>
              <button type="button" class="btn btn-secondary btn-sm">Small button</button>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="button-sizes">&lt;button type="button" class="btn btn-primary btn-lg"&gt;Large button&lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary btn-lg"&gt;Large button&lt;/button&gt;
      
      &lt;button type="button" class="btn btn-primary"&gt;Default button&lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary"&gt;Default button&lt;/button&gt;
      
      &lt;button type="button" class="btn btn-primary btn-sm"&gt;Small button&lt;/button&gt;
      &lt;button type="button" class="btn btn-secondary btn-sm"&gt;Small button&lt;/button&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBootstrapButtons())">
              <i class="fas fa-plus"></i> Insert Button Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('button-group')">
              <i class="fas fa-layer-group"></i> Button Groups
            </button>
          </div>
        `
      },borders: {
        title: "Borders",
        subtitle: "Use border utilities to add or remove borders from elements and control their color, width, and radius.",
        breadcrumb: ["Utilities", "Borders"],
        content: `
          <div class="example-note mb-4">
            <p>Use border utility classes to style element borders quickly. You can control the border’s presence, sides, color, radius, and width.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Basic Border Classes</span>
              <button class="btn-copy" onclick="copyCode('border-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="border p-3 mb-2">.border</div>
              <div class="border-top p-3 mb-2">.border-top</div>
              <div class="border-end p-3 mb-2">.border-end</div>
              <div class="border-bottom p-3 mb-2">.border-bottom</div>
              <div class="border-start p-3 mb-2">.border-start</div>
              <div class="border-0 p-3 mb-2">.border-0</div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="border-basic">&lt;div class="border"&gt;.border&lt;/div&gt;
      &lt;div class="border-top"&gt;.border-top&lt;/div&gt;
      &lt;div class="border-end"&gt;.border-end&lt;/div&gt;
      &lt;div class="border-bottom"&gt;.border-bottom&lt;/div&gt;
      &lt;div class="border-start"&gt;.border-start&lt;/div&gt;
      &lt;div class="border-0"&gt;.border-0&lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container mt-4">
            <div class="example-header">
              <span>Border Color & Radius</span>
              <button class="btn-copy" onclick="copyCode('border-color-radius')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="border border-primary rounded p-3 mb-2">Primary Border + Rounded</div>
              <div class="border border-danger rounded-3 p-3 mb-2">Danger Border + Rounded-3</div>
              <div class="border border-success rounded-circle text-center p-5" style="width: 150px; height: 150px;">Circle</div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="border-color-radius">&lt;div class="border border-primary rounded"&gt;Primary Border + Rounded&lt;/div&gt;
      &lt;div class="border border-danger rounded-3"&gt;Danger Border + Rounded-3&lt;/div&gt;
      &lt;div class="border border-success rounded-circle text-center p-5" style="width: 150px; height: 150px;"&gt;Circle&lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Use <code>.border-*</code> for colors, <code>.rounded*</code> for radius, and <code>.border-0</code> to remove borders.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getBordersCode())">
              <i class="fas fa-plus"></i> Insert Border Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('colors')">
              <i class="fas fa-palette"></i> View Colors
            </button>
          </div>
        `
      },display: {
        title: "Display",
        subtitle: "Control the display value of elements with Bootstrap’s responsive display utility classes.",
        breadcrumb: ["Utilities", "Display"],
        content: `
          <div class="example-note mb-4">
            <p>Use display utilities to toggle the display value of elements. These utilities are responsive and mobile-first.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Basic Display Classes</span>
              <button class="btn-copy" onclick="copyCode('display-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content border p-3">
              <div class="d-inline p-2 bg-primary text-white">.d-inline</div>
              <div class="d-block p-2 bg-secondary text-white">.d-block</div>
              <div class="d-inline-block p-2 bg-success text-white">.d-inline-block</div>
              <div class="d-flex p-2 bg-danger text-white">.d-flex</div>
              <div class="d-inline-flex p-2 bg-warning text-dark">.d-inline-flex</div>
              <div class="d-grid p-2 bg-info text-white">.d-grid</div>
              <div class="d-none p-2 bg-dark text-white">.d-none (Hidden)</div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="display-basic">&lt;div class="d-inline"&gt;.d-inline&lt;/div&gt;
      &lt;div class="d-block"&gt;.d-block&lt;/div&gt;
      &lt;div class="d-inline-block"&gt;.d-inline-block&lt;/div&gt;
      &lt;div class="d-flex"&gt;.d-flex&lt;/div&gt;
      &lt;div class="d-inline-flex"&gt;.d-inline-flex&lt;/div&gt;
      &lt;div class="d-grid"&gt;.d-grid&lt;/div&gt;
      &lt;div class="d-none"&gt;.d-none&lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container mt-4">
            <div class="example-header">
              <span>Responsive Display Classes</span>
              <button class="btn-copy" onclick="copyCode('display-responsive')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content border p-3">
              <div class="d-none d-sm-block bg-light p-2 border">Hidden on xs, visible on sm+</div>
              <div class="d-block d-sm-none bg-light p-2 border mt-2">Visible on xs, hidden on sm+</div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="display-responsive">&lt;div class="d-none d-sm-block"&gt;Hidden on xs, visible on sm+&lt;/div&gt;
      &lt;div class="d-block d-sm-none"&gt;Visible on xs, hidden on sm+&lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Use display utilities with breakpoints: <code>.d-none</code>, <code>.d-sm-block</code>, <code>.d-md-flex</code>, etc.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getDisplayCode())">
              <i class="fas fa-plus"></i> Insert Display Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('flex')">
              <i class="fas fa-align-justify"></i> View Flex Utilities
            </button>
          </div>
        `
      }
,flex: {
    title: "Flex",
    subtitle: "Use Bootstrap’s flexbox utilities to build responsive layouts and align content easily.",
    breadcrumb: ["Utilities", "Flex"],
    content: `
      <div class="example-note mb-4">
        <p>Use <code>flex</code> utilities to apply CSS flexbox properties to elements. Easily control direction, wrapping, justification, alignment, and more.</p>
      </div>
  
      <div class="example-container">
        <div class="example-header">
          <span>Enable Flex</span>
          <button class="btn-copy" onclick="copyCode('flex-enable')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content d-flex gap-2 p-2 border">
          <div class="p-2 bg-primary text-white">Flex item 1</div>
          <div class="p-2 bg-secondary text-white">Flex item 2</div>
          <div class="p-2 bg-success text-white">Flex item 3</div>
        </div>
        <div class="code-container">
          <div class="code-content">
  <pre id="flex-enable">&lt;div class="d-flex"&gt;
    &lt;div class="p-2 bg-primary text-white"&gt;Flex item 1&lt;/div&gt;
    &lt;div class="p-2 bg-secondary text-white"&gt;Flex item 2&lt;/div&gt;
    &lt;div class="p-2 bg-success text-white"&gt;Flex item 3&lt;/div&gt;
  &lt;/div&gt;</pre>
          </div>
        </div>
      </div>
  
      <div class="example-container mt-4">
        <div class="example-header">
          <span>Flex Direction</span>
          <button class="btn-copy" onclick="copyCode('flex-direction')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content d-flex flex-column gap-2 p-2 border">
          <div class="p-2 bg-info text-white">Column 1</div>
          <div class="p-2 bg-danger text-white">Column 2</div>
        </div>
        <div class="code-container">
          <div class="code-content">
  <pre id="flex-direction">&lt;div class="d-flex flex-column"&gt;
    &lt;div class="p-2 bg-info text-white"&gt;Column 1&lt;/div&gt;
    &lt;div class="p-2 bg-danger text-white"&gt;Column 2&lt;/div&gt;
  &lt;/div&gt;</pre>
          </div>
        </div>
      </div>
  
      <div class="example-container mt-4">
        <div class="example-header">
          <span>Justify Content</span>
          <button class="btn-copy" onclick="copyCode('flex-justify')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content d-flex justify-content-between p-2 border">
          <div class="p-2 bg-warning text-dark">Start</div>
          <div class="p-2 bg-dark text-white">End</div>
        </div>
        <div class="code-container">
          <div class="code-content">
  <pre id="flex-justify">&lt;div class="d-flex justify-content-between"&gt;
    &lt;div class="p-2 bg-warning text-dark"&gt;Start&lt;/div&gt;
    &lt;div class="p-2 bg-dark text-white"&gt;End&lt;/div&gt;
  &lt;/div&gt;</pre>
          </div>
        </div>
      </div>
  
      <div class="example-container mt-4">
        <div class="example-header">
          <span>Align Items</span>
          <button class="btn-copy" onclick="copyCode('flex-align')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content d-flex align-items-center p-2" style="height: 100px; border: 1px solid #ccc;">
          <div class="p-2 bg-primary text-white">Aligned center</div>
        </div>
        <div class="code-container">
          <div class="code-content">
  <pre id="flex-align">&lt;div class="d-flex align-items-center" style="height: 100px;"&gt;
    &lt;div class="p-2 bg-primary text-white"&gt;Aligned center&lt;/div&gt;
  &lt;/div&gt;</pre>
          </div>
        </div>
      </div>
  
      <div class="example-note mt-4">
        <p>Bootstrap offers complete flex utility support: <code>d-flex</code>, <code>flex-*</code>, <code>justify-content-*</code>, <code>align-items-*</code>, <code>flex-wrap</code>, and more.</p>
      </div>
  
      <div class="quick-actions">
        <button class="btn btn-primary" onclick="insertToParent(getFlexCode())">
          <i class="fas fa-plus"></i> Insert Flex Code
        </button>
        <button class="btn btn-outline-primary" onclick="showContent('float')">
          <i class="fas fa-exchange-alt"></i> View Float Utilities
        </button>
      </div>
    `
  }
        
,colors: {
    title: "Colors",
    subtitle: "Use Bootstrap’s color utilities to apply text and background colors using theme and contextual classes.",
    breadcrumb: ["Utilities", "Colors"],
    content: `
      <div class="example-note mb-4">
        <p>Bootstrap includes a wide range of color utility classes for setting text color and background color quickly.</p>
      </div>
  
      <div class="example-container">
        <div class="example-header">
          <span>Text Color Classes</span>
          <button class="btn-copy" onclick="copyCode('text-colors')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content">
          <p class="text-primary">.text-primary</p>
          <p class="text-secondary">.text-secondary</p>
          <p class="text-success">.text-success</p>
          <p class="text-danger">.text-danger</p>
          <p class="text-warning">.text-warning</p>
          <p class="text-info">.text-info</p>
          <p class="text-light bg-dark">.text-light</p>
          <p class="text-dark">.text-dark</p>
          <p class="text-body">.text-body</p>
          <p class="text-muted">.text-muted</p>
          <p class="text-white bg-dark">.text-white</p>
          <p class="text-black-50">.text-black-50</p>
          <p class="text-white-50 bg-dark">.text-white-50</p>
        </div>
        <div class="code-container">
          <div class="code-content">
  <pre id="text-colors">&lt;p class="text-primary"&gt;.text-primary&lt;/p&gt;
  &lt;p class="text-secondary"&gt;.text-secondary&lt;/p&gt;
  &lt;p class="text-success"&gt;.text-success&lt;/p&gt;
  &lt;p class="text-danger"&gt;.text-danger&lt;/p&gt;
  &lt;p class="text-warning"&gt;.text-warning&lt;/p&gt;
  &lt;p class="text-info"&gt;.text-info&lt;/p&gt;
  &lt;p class="text-light bg-dark"&gt;.text-light&lt;/p&gt;
  &lt;p class="text-dark"&gt;.text-dark&lt;/p&gt;
  &lt;p class="text-body"&gt;.text-body&lt;/p&gt;
  &lt;p class="text-muted"&gt;.text-muted&lt;/p&gt;
  &lt;p class="text-white bg-dark"&gt;.text-white&lt;/p&gt;
  &lt;p class="text-black-50"&gt;.text-black-50&lt;/p&gt;
  &lt;p class="text-white-50 bg-dark"&gt;.text-white-50&lt;/p&gt;</pre>
          </div>
        </div>
      </div>
  
      <div class="example-container mt-4">
        <div class="example-header">
          <span>Background Color Classes</span>
          <button class="btn-copy" onclick="copyCode('bg-colors')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content text-white">
          <div class="p-3 mb-2 bg-primary">.bg-primary</div>
          <div class="p-3 mb-2 bg-secondary">.bg-secondary</div>
          <div class="p-3 mb-2 bg-success">.bg-success</div>
          <div class="p-3 mb-2 bg-danger">.bg-danger</div>
          <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
          <div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
          <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
          <div class="p-3 mb-2 bg-dark">.bg-dark</div>
          <div class="p-3 mb-2 bg-body text-dark">.bg-body</div>
          <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
          <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
        </div>
        <div class="code-container">
          <div class="code-content">
  <pre id="bg-colors">&lt;div class="p-3 mb-2 bg-primary text-white"&gt;.bg-primary&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-secondary text-white"&gt;.bg-secondary&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-success text-white"&gt;.bg-success&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-danger text-white"&gt;.bg-danger&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-warning text-dark"&gt;.bg-warning&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-info text-dark"&gt;.bg-info&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-light text-dark"&gt;.bg-light&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-dark text-white"&gt;.bg-dark&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-body text-dark"&gt;.bg-body&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-white text-dark"&gt;.bg-white&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-transparent text-dark"&gt;.bg-transparent&lt;/div&gt;</pre>
          </div>
        </div>
      </div>
  
      <div class="example-note mt-4">
        <p>Combine <code>.text-*</code> and <code>.bg-*</code> for effective contrast and accessibility.</p>
      </div>
  
      <div class="quick-actions">
        <button class="btn btn-primary" onclick="insertToParent(getColorCode())">
          <i class="fas fa-plus"></i> Insert Color Code
        </button>
        <button class="btn btn-outline-primary" onclick="showContent('display')">
          <i class="fas fa-tv"></i> View Display Utilities
        </button>
      </div>
    `
  }
        
,background: {
    title: "Background",
    subtitle: "Set background colors and images using Bootstrap’s background utility classes.",
    breadcrumb: ["Utilities", "Background"],
    content: `
      <div class="example-note mb-4">
        <p>Use background utilities to apply color, gradients, and images to elements. Combine them with padding and text utilities for styling.</p>
      </div>
  
      <div class="example-container">
        <div class="example-header">
          <span>Background Color Classes</span>
          <button class="btn-copy" onclick="copyCode('bg-colors')"><i class="fas fa-copy"></i> Copy</button>
        </div>
        <div class="example-content text-white">
          <div class="p-3 mb-2 bg-primary">.bg-primary</div>
          <div class="p-3 mb-2 bg-secondary">.bg-secondary</div>
          <div class="p-3 mb-2 bg-success">.bg-success</div>
          <div class="p-3 mb-2 bg-danger">.bg-danger</div>
          <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
          <div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
          <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
          <div class="p-3 mb-2 bg-dark">.bg-dark</div>
          <div class="p-3 mb-2 bg-body text-dark">.bg-body</div>
          <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
          <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
        </div>
        <div class="code-container">
          <div class="code-content">
  <pre id="bg-colors">&lt;div class="p-3 mb-2 bg-primary text-white"&gt;.bg-primary&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-secondary text-white"&gt;.bg-secondary&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-success text-white"&gt;.bg-success&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-danger text-white"&gt;.bg-danger&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-warning text-dark"&gt;.bg-warning&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-info text-dark"&gt;.bg-info&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-light text-dark"&gt;.bg-light&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-dark text-white"&gt;.bg-dark&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-body text-dark"&gt;.bg-body&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-white text-dark"&gt;.bg-white&lt;/div&gt;
  &lt;div class="p-3 mb-2 bg-transparent text-dark"&gt;.bg-transparent&lt;/div&gt;</pre>
          </div>
        </div>
      </div>
  
      <div class="example-note mt-4">
        <p>Use <code>.text-white</code> or <code>.text-dark</code> for better readability depending on background color. Use spacing classes like <code>.p-3</code> and <code>.mb-2</code> to control layout.</p>
      </div>
  
      <div class="quick-actions">
        <button class="btn btn-primary" onclick="insertToParent(getBackgroundCode())">
          <i class="fas fa-plus"></i> Insert Background Code
        </button>
        <button class="btn btn-outline-primary" onclick="showContent('borders')">
          <i class="fas fa-border-style"></i> View Borders
        </button>
      </div>
    `
  }
        
      ,position: {
        title: "Position",
        subtitle: "Use position utilities to quickly set an element’s position to relative, absolute, fixed, sticky, or static.",
        breadcrumb: ["Helpers", "Position"],
        content: `
          <div class="example-note mb-4">
            <p>These classes are used to position elements using CSS’s <code>position</code> property.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Position Utilities</span>
              <button class="btn-copy" onclick="copyCode('position-utilities')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <div class="position-static">.position-static</div>
              <div class="position-relative">.position-relative</div>
              <div class="position-absolute">.position-absolute</div>
              <div class="position-fixed">.position-fixed</div>
              <div class="position-sticky">.position-sticky</div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="position-utilities">&lt;div class="position-static"&gt;.position-static&lt;/div&gt;
      &lt;div class="position-relative"&gt;.position-relative&lt;/div&gt;
      &lt;div class="position-absolute"&gt;.position-absolute&lt;/div&gt;
      &lt;div class="position-fixed"&gt;.position-fixed&lt;/div&gt;
      &lt;div class="position-sticky"&gt;.position-sticky&lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container mt-4">
            <div class="example-header">
              <span>Example: Absolute Positioning</span>
              <button class="btn-copy" onclick="copyCode('position-example')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content position-relative" style="height: 200px; background: #f8f9fa;">
              <div class="position-absolute top-0 start-0 bg-primary text-white p-2">Top Start</div>
              <div class="position-absolute top-0 end-0 bg-success text-white p-2">Top End</div>
              <div class="position-absolute bottom-0 start-0 bg-danger text-white p-2">Bottom Start</div>
              <div class="position-absolute bottom-0 end-0 bg-warning text-dark p-2">Bottom End</div>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="position-example">&lt;div class="position-relative" style="height: 200px;"&gt;
        &lt;div class="position-absolute top-0 start-0 bg-primary text-white p-2"&gt;Top Start&lt;/div&gt;
        &lt;div class="position-absolute top-0 end-0 bg-success text-white p-2"&gt;Top End&lt;/div&gt;
        &lt;div class="position-absolute bottom-0 start-0 bg-danger text-white p-2"&gt;Bottom Start&lt;/div&gt;
        &lt;div class="position-absolute bottom-0 end-0 bg-warning text-dark p-2"&gt;Bottom End&lt;/div&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Combine positioning with offset helpers like <code>.top-0</code>, <code>.start-0</code>, <code>.bottom-0</code>, and <code>.end-0</code> for precise placement.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getPositionCode())">
              <i class="fas fa-plus"></i> Insert Position Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('ratio')">
              <i class="fas fa-expand-arrows-alt"></i> View Ratio
            </button>
          </div>
        `
      }
      
      ,focusRing: {
        title: "Focus Ring",
        subtitle: "Add or remove focus ring styles for improved accessibility and user interaction feedback.",
        breadcrumb: ["Helpers", "Focus Ring"],
        content: `
          <div class="example-note mb-4">
            <p>Bootstrap provides <code>.focus-ring</code> utility to apply a visible outline for accessibility on elements when they are focused via keyboard navigation.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Basic Focus Ring</span>
              <button class="btn-copy" onclick="copyCode('focus-ring-basic')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <button type="button" class="btn btn-primary focus-ring">Focus Ring Example</button>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="focus-ring-basic">&lt;button type="button" class="btn btn-primary focus-ring"&gt;Focus Ring Example&lt;/button&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-container mt-4">
            <div class="example-header">
              <span>Removing Focus Ring</span>
              <button class="btn-copy" onclick="copyCode('focus-ring-remove')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <button type="button" class="btn btn-secondary focus-ring focus-ring-disabled">No Focus Ring</button>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="focus-ring-remove">&lt;button type="button" class="btn btn-secondary focus-ring focus-ring-disabled"&gt;No Focus Ring&lt;/button&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>Use <code>.focus-ring</code> to enhance accessibility for keyboard users. Combine with <code>.focus-ring-disabled</code> to remove the ring when not needed.</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getFocusRingCode())">
              <i class="fas fa-plus"></i> Insert Focus Ring Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('iconLink')">
              <i class="fas fa-link"></i> View Icon Link
            </button>
          </div>
        `
      }
      
      ,coloredLinks: {
        title: "Colored Links",
        subtitle: "Style links with contextual color utility classes to match the theme or indicate purpose.",
        breadcrumb: ["Helpers", "Colored Links"],
        content: `
          <div class="example-note mb-4">
            <p>Bootstrap provides contextual classes for styling <code>&lt;a&gt;</code> elements. You can apply color utilities to links just like text.</p>
          </div>
      
          <div class="example-container">
            <div class="example-header">
              <span>Contextual Link Colors</span>
              <button class="btn-copy" onclick="copyCode('colored-links')"><i class="fas fa-copy"></i> Copy</button>
            </div>
            <div class="example-content">
              <p><a href="#" class="link-primary">Primary link</a></p>
              <p><a href="#" class="link-secondary">Secondary link</a></p>
              <p><a href="#" class="link-success">Success link</a></p>
              <p><a href="#" class="link-danger">Danger link</a></p>
              <p><a href="#" class="link-warning">Warning link</a></p>
              <p><a href="#" class="link-info">Info link</a></p>
              <p><a href="#" class="link-light bg-dark p-1 d-inline-block">Light link</a></p>
              <p><a href="#" class="link-dark">Dark link</a></p>
            </div>
            <div class="code-container">
              <div class="code-content">
      <pre id="colored-links">&lt;p&gt;&lt;a href="#" class="link-primary"&gt;Primary link&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&lt;a href="#" class="link-secondary"&gt;Secondary link&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&lt;a href="#" class="link-success"&gt;Success link&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&lt;a href="#" class="link-danger"&gt;Danger link&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&lt;a href="#" class="link-warning"&gt;Warning link&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&lt;a href="#" class="link-info"&gt;Info link&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&lt;a href="#" class="link-light bg-dark p-1 d-inline-block"&gt;Light link&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&lt;a href="#" class="link-dark"&gt;Dark link&lt;/a&gt;&lt;/p&gt;</pre>
              </div>
            </div>
          </div>
      
          <div class="example-note mt-4">
            <p>These classes modify the color and hover behavior of links. Add background color if contrast is required (e.g., for <code>.link-light</code>).</p>
          </div>
      
          <div class="quick-actions">
            <button class="btn btn-primary" onclick="insertToParent(getColoredLinksCode())">
              <i class="fas fa-plus"></i> Insert Colored Links Code
            </button>
            <button class="btn btn-outline-primary" onclick="showContent('focusRing')">
              <i class="fas fa-dot-circle"></i> View Focus Ring
            </button>
          </div>
        `
      }
      
      
         
    
};

// JavaScript functions for Bootstrap content
function showContent(contentId) {
    const content = bootstrapContent[contentId];
    if (!content) {
        // Show placeholder for content not yet implemented
        document.getElementById('mainContent').innerHTML = `
            <div class="content-header">
                <div class="breadcrumb-custom">Bootstrap > ${contentId}</div>
                <h1 class="content-title">${contentId.charAt(0).toUpperCase() + contentId.slice(1).replace('-', ' ')}</h1>
                <p class="content-subtitle">This section is being prepared with complete Bootstrap documentation.</p>
            </div>
            <div class="alert alert-info">
                <h5><i class="fas fa-info-circle"></i> Coming Soon</h5>
                <p>This section will contain the complete Bootstrap documentation for ${contentId}. In the meantime, you can:</p>
                <ul>
                    <li>Visit the <a href="https://getbootstrap.com/docs/5.3/${contentId.replace('-', '/')}" target="_blank">official Bootstrap documentation</a></li>
                    <li>Use the search function to find related content</li>
                    <li>Explore other available sections</li>
                </ul>
            </div>
        `;
        return;
    }
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update main content
    document.getElementById('mainContent').innerHTML = `
        <div class="content-header">
            <div class="breadcrumb-custom">${content.breadcrumb.join(' > ')}</div>
            <h1 class="content-title">${content.title}</h1>
            <p class="content-subtitle">${content.subtitle}</p>
        </div>
        ${content.content}
    `;
}

function searchContent() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const section = item.closest('.nav-section');
        
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
            section.style.display = 'block';
        } else {
            item.style.display = searchTerm ? 'none' : 'block';
        }
    });
    
    // Show/hide sections based on whether they have visible items
    document.querySelectorAll('.nav-section').forEach(section => {
        const visibleItems = section.querySelectorAll('.nav-item:not([style*="display: none"])');
        section.style.display = visibleItems.length > 0 || !searchTerm ? 'block' : 'none';
    });
}

function copyCode(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        // Show success feedback
        const button = event.target.closest('.btn-copy');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.color = '#28a745';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.color = '';
        }, 2000);
    });
}

function insertToParent(code) {
    if (window.parent && window.parent.koli) {
        const currentCode = window.parent.koli.getValue();
        const newCode = currentCode + '\n\n' + code;
        window.parent.koli.setValue(newCode);
        window.parent.koli.clearSelection();
        
        // Show success message
        const toast = document.createElement('div');
        toast.className = 'alert alert-success position-fixed';
        toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        toast.innerHTML = '<i class="fas fa-check"></i> Code inserted into editor successfully!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(code).then(() => {
            alert('Code copied to clipboard!');
        });
    }
}

// Code generation functions
function getBootstrapStarter() {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="display-4">Hello, Bootstrap!</h1>
      <p class="lead">This is a simple Bootstrap starter template.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
  </body>
</html>`;
}

function getBootstrapButtons() {
    return `<!-- Bootstrap Buttons -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>

<!-- Outline Buttons -->
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>

<!-- Button Sizes -->
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary">Default button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>

<!-- Include Bootstrap CSS and JS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>`;
}

function getBootstrapGrid() {
    return `<!-- Bootstrap Grid System -->
<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  
  <!-- Responsive Grid -->
  <div class="row">
    <div class="col-12 col-md-8">col-12 col-md-8</div>
    <div class="col-6 col-md-4">col-6 col-md-4</div>
  </div>
  
  <!-- Specific Column Widths -->
  <div class="row">
    <div class="col-6 col-md-4">col-6 col-md-4</div>
    <div class="col-6 col-md-4">col-6 col-md-4</div>
    <div class="col-6 col-md-4">col-6 col-md-4</div>
  </div>
</div>

<!-- Include Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">`;
}

function getBootstrapCard() {
    return `<!-- Bootstrap Card -->
<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- Card with Header and Footer -->
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>

<!-- Include Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">`;
}

function getBootstrapNavbar() {
    return `<!-- Bootstrap Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Your Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Include Bootstrap CSS and JS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>`;
}

function getBootstrapModal() {
    return `<!-- Bootstrap Modal -->
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here. You can add any content like forms, images, or other components.</p>
        <p>This modal is fully responsive and accessible.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Include Bootstrap CSS and JS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>`;
}

function getBootstrapAlerts() {
    return `<!-- Bootstrap Alerts -->
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>

<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div class="alert alert-danger" role="alert">
  <strong>Error!</strong> Something went wrong. Please try again.
</div>

<div class="alert alert-info" role="alert">
  <strong>Info:</strong> This is some important information you should know.
</div>

<!-- Include Bootstrap CSS and JS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>`;
}

// Add complete Bootstrap documentation sections
const additionalBootstrapContent = {
    // Colors section
    color: {
        title: "Colors",
        subtitle: "Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element's appearance.",
        breadcrumb: ["Customize", "Colors"],
        content: `
            <div class="example-container">
                <div class="example-header">
                    <span>Theme Colors</span>
                    <button class="btn-copy" onclick="copyCode('theme-colors')"><i class="fas fa-copy"></i> Copy</button>
                </div>
                <div class="example-content">
                    <div class="row g-3">
                        <div class="col-md-2">
                            <div class="p-3 bg-primary text-white text-center rounded">Primary</div>
                        </div>
                        <div class="col-md-2">
                            <div class="p-3 bg-secondary text-white text-center rounded">Secondary</div>
                        </div>
                        <div class="col-md-2">
                            <div class="p-3 bg-success text-white text-center rounded">Success</div>
                        </div>
                        <div class="col-md-2">
                            <div class="p-3 bg-danger text-white text-center rounded">Danger</div>
                        </div>
                        <div class="col-md-2">
                            <div class="p-3 bg-warning text-dark text-center rounded">Warning</div>
                        </div>
                        <div class="col-md-2">
                            <div class="p-3 bg-info text-dark text-center rounded">Info</div>
                        </div>
                    </div>
                </div>
                <div class="code-container">
                    <div class="code-content">
                        <pre id="theme-colors">&lt;div class="bg-primary text-white p-3"&gt;Primary&lt;/div&gt;
&lt;div class="bg-secondary text-white p-3"&gt;Secondary&lt;/div&gt;
&lt;div class="bg-success text-white p-3"&gt;Success&lt;/div&gt;
&lt;div class="bg-danger text-white p-3"&gt;Danger&lt;/div&gt;
&lt;div class="bg-warning text-dark p-3"&gt;Warning&lt;/div&gt;
&lt;div class="bg-info text-dark p-3"&gt;Info&lt;/div&gt;</pre>
                    </div>
                </div>
            </div>

            <div class="example-container">
                <div class="example-header">
                    <span>Text Colors</span>
                    <button class="btn-copy" onclick="copyCode('text-colors')"><i class="fas fa-copy"></i> Copy</button>
                </div>
                <div class="example-content">
                    <p class="text-primary">This is primary text</p>
                    <p class="text-secondary">This is secondary text</p>
                    <p class="text-success">This is success text</p>
                    <p class="text-danger">This is danger text</p>
                    <p class="text-warning">This is warning text</p>
                    <p class="text-info">This is info text</p>
                    <p class="text-muted">This is muted text</p>
                </div>
                <div class="code-container">
                    <div class="code-content">
                        <pre id="text-colors">&lt;p class="text-primary"&gt;Primary text&lt;/p&gt;
&lt;p class="text-secondary"&gt;Secondary text&lt;/p&gt;
&lt;p class="text-success"&gt;Success text&lt;/p&gt;
&lt;p class="text-danger"&gt;Danger text&lt;/p&gt;
&lt;p class="text-warning"&gt;Warning text&lt;/p&gt;
&lt;p class="text-info"&gt;Info text&lt;/p&gt;</pre>
                    </div>
                </div>
            </div>

            <div class="quick-actions">
                <button class="btn btn-primary" onclick="insertToParent(getBootstrapColors())">
                    <i class="fas fa-plus"></i> Insert Color Code
                </button>
            </div>
        `
    },

    // Forms section
    'forms-overview': {
        title: "Forms",
        subtitle: "Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
        breadcrumb: ["Forms", "Overview"],
        content: `
            <div class="example-container">
                <div class="example-header">
                    <span>Form Example</span>
                    <button class="btn-copy" onclick="copyCode('form-example')"><i class="fas fa-copy"></i> Copy</button>
                </div>
                <div class="example-content">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1">
                            <div class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="code-container">
                    <div class="code-content">
                        <pre id="form-example">&lt;form&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="email" class="form-label"&gt;Email&lt;/label&gt;
    &lt;input type="email" class="form-control" id="email"&gt;
  &lt;/div&gt;
  &lt;div class="mb-3"&gt;
    &lt;label for="password" class="form-label"&gt;Password&lt;/label&gt;
    &lt;input type="password" class="form-control" id="password"&gt;
  &lt;/div&gt;
  &lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre>
                    </div>
                </div>
            </div>

            <div class="quick-actions">
                <button class="btn btn-primary" onclick="insertToParent(getBootstrapForm())">
                    <i class="fas fa-plus"></i> Insert Form Code
                </button>
            </div>
        `
    },

    // Spacing utilities
    spacing: {
        title: "Spacing",
        subtitle: "Bootstrap includes a wide range of shorthand responsive margin and padding utility classes to modify an element's appearance.",
        breadcrumb: ["Utilities", "Spacing"],
        content: `
            <div class="example-container">
                <div class="example-header">
                    <span>Margin and Padding</span>
                    <button class="btn-copy" onclick="copyCode('spacing-example')"><i class="fas fa-copy"></i> Copy</button>
                </div>
                <div class="example-content">
                    <div class="bg-light p-3 mb-3">
                        <div class="bg-primary text-white p-3 m-3">m-3 (margin all sides)</div>
                        <div class="bg-success text-white p-3 mx-3">mx-3 (margin left and right)</div>
                        <div class="bg-warning text-dark p-3 my-3">my-3 (margin top and bottom)</div>
                    </div>
                </div>
                <div class="code-container">
                    <div class="code-content">
                        <pre id="spacing-example">&lt;div class="m-3"&gt;margin all sides&lt;/div&gt;
&lt;div class="mx-3"&gt;margin left and right&lt;/div&gt;
&lt;div class="my-3"&gt;margin top and bottom&lt;/div&gt;
&lt;div class="p-3"&gt;padding all sides&lt;/div&gt;</pre>
                    </div>
                </div>
            </div>

            <div class="quick-actions">
                <button class="btn btn-primary" onclick="insertToParent(getBootstrapSpacing())">
                    <i class="fas fa-plus"></i> Insert Spacing Code
                </button>
            </div>
        `
    }
};

// Merge additional content with existing content
Object.assign(bootstrapContent, additionalBootstrapContent);

// Add corresponding JavaScript functions
function getBootstrapColors() {
    return `<!-- Bootstrap Colors -->
<!-- Background Colors -->
<div class="bg-primary text-white p-3 mb-2">Primary Background</div>
<div class="bg-secondary text-white p-3 mb-2">Secondary Background</div>
<div class="bg-success text-white p-3 mb-2">Success Background</div>
<div class="bg-danger text-white p-3 mb-2">Danger Background</div>
<div class="bg-warning text-dark p-3 mb-2">Warning Background</div>
<div class="bg-info text-dark p-3 mb-2">Info Background</div>
<div class="bg-light text-dark p-3 mb-2 border">Light Background</div>
<div class="bg-dark text-white p-3 mb-2">Dark Background</div>

<!-- Text Colors -->
<p class="text-primary">Primary text color</p>
<p class="text-secondary">Secondary text color</p>
<p class="text-success">Success text color</p>
<p class="text-danger">Danger text color</p>
<p class="text-warning">Warning text color</p>
<p class="text-info">Info text color</p>
<p class="text-muted">Muted text color</p>

<!-- Include Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">`;
}

function getBootstrapForm() {
    return `<!-- Bootstrap Form -->
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>California</option>
      <option>New York</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

<!-- Include Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">`;
}

function getBootstrapSpacing() {
    return `<!-- Bootstrap Spacing Utilities -->
<!-- Margin Examples -->
<div class="m-0">No margin</div>
<div class="m-1">Small margin (0.25rem)</div>
<div class="m-2">Medium margin (0.5rem)</div>
<div class="m-3">Large margin (1rem)</div>
<div class="m-4">Extra large margin (1.5rem)</div>
<div class="m-5">Huge margin (3rem)</div>

<!-- Specific Margin Directions -->
<div class="mt-3">Margin top</div>
<div class="me-3">Margin end (right)</div>
<div class="mb-3">Margin bottom</div>
<div class="ms-3">Margin start (left)</div>
<div class="mx-3">Margin horizontal</div>
<div class="my-3">Margin vertical</div>

<!-- Padding Examples -->
<div class="p-0">No padding</div>
<div class="p-1">Small padding</div>
<div class="p-2">Medium padding</div>
<div class="p-3">Large padding</div>

<!-- Include Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">`;
}
