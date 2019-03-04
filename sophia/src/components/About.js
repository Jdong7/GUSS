import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-card">
          <p>Cover Page</p>
          <p>
            Sofia Learns About Research Written by Renee Cadzow, PhD,Alexandra
            Marrone, and Teresa Quattrin, MD Illustrated by Isabella Bannerman
          </p>
          <p>
            Sofia Learns About Research Written by Renee Cadzow, PhD,Alexandra
            Marrone, and Teresa Quattrin, MD Illustrated by Isabella Bannerman
            Designed by Tia Canonico University at Buffalo Clinical and
            Translational Science Institute
          </p>
          <p>
            Copyright © 2017 by University at Buffalo Clinical and Translational
            Science Institute All rights reserved. This book or any portion
            thereof may not be reproduced or used in any manner whatsoever
            without the express written permission of the publisher. Printed in
            the United States of America First Printing, 2017 The publication
            was supported by the National Center for Advancing Translational
            Sciences of the National Institutes of Health under award number
            UL1TR001412 to the University at Buffalo.The content is solely the
            responsibility of the authors and does not necessarily represent the
            official views of the NIH. If interested in ordering copies of this
            book, please contact CTSI Administration 875 Ellicott Street
            Buffalo, NY 14203 716-829-2272
          </p>
        </div>
      </div>
    );
  }
}

export default About;
