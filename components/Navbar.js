import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="index">PayHQ</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
          <Link href="/tradingsetting"><a className="nav-link">Trading Setting</a></Link>
          </li>
          <li className="nav-item">
          <Link href="/transferinout"><a className="nav-link">Transfer In/Out</a></Link>
          </li>
          <li className="nav-item">
          <Link href="/yourearning"><a className="nav-link">Your Earning</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// cont Tabs = () => (
//   <ul class="nav nav-tabs">
//   <li class="nav-item">
//   <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" data-toggle="tab" href="#profile">Profile</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link disabled" href="#">Disabled</a>
//   </li>
//   <li class="nav-item dropdown">
//     <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//     <div class="dropdown-menu">
//       <a class="dropdown-item" href="#">Action</a>
//       <a class="dropdown-item" href="#">Another action</a>
//       <a class="dropdown-item" href="#">Something else here</a>
//       <div class="dropdown-divider"></div>
//       <a class="dropdown-item" href="#">Separated link</a>
//     </div>
//   </li>
// </ul>
// <div id="myTabContent" class="tab-content">
//   <div class="tab-pane fade show active" id="home">
//     <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
//   </div>
//   <div class="tab-pane fade" id="profile">
//     <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
//   </div>
//   <div class="tab-pane fade" id="dropdown1">
//     <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
//   </div>
//   <div class="tab-pane fade" id="dropdown2">
//     <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
//   </div>
// </div>
// );

export default Navbar;