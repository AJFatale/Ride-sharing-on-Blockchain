import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

function DashboardContent(props){
    return(
    <div>
        <div id="content" className={props.sideNav ? 'page-content p-5 active' : 'page-content p-5'}>
          <h2 class="display-4">Bootstrap Vertical Nav</h2>
          <p className="lead mb-0">Build a fixed sidebar using Bootstrap 4 vertical navigation and media objects.</p>
          <div className="sepertor"></div>
          <div className="row">
            <div className="col-lg-7">
              <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="col-lg-5">
              <h1>hello dashboard content</h1>
            </div>
          </div>
      </div>
    </div>
    );
}

export default DashboardContent;