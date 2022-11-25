import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BsThreeDots } from "react-icons/bs";
function ThreeDotPopOver() {
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              {/* <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header> */}
              <Popover.Body>
                <ul className='threeDots'>
                    <li style={{"listStyle":"none","cursor":"pointer"}}>Edit</li>
                    <li style={{"listStyle":"none","cursor":"pointer"}}>Report</li>
                    <li style={{"listStyle":"none","cursor":"pointer"}}>Option-3</li>
                </ul>
              </Popover.Body>
            </Popover>
          }
        >
          <button className='btn border-0'><BsThreeDots /></button>
        </OverlayTrigger>
      ))}
    </>
  );
};

export default ThreeDotPopOver;