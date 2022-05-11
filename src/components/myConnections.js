import React from 'react';
import { Row } from 'react-bootstrap';
import { useGlobalState } from "../context/GlobalState";


export default function Connections() {
  const [ state, dispatch ] = useGlobalState();
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    async function getConnections() {
      let options = {
        url: `/connections/?dog_target__user_id=${state.currentUser.user_id}`,
        method: 'GET',
      } 
      let resp = await request(options)
      setConnections(resp.data)
    }

    async function getOtherConnections() {
        let options = {
          url: `/connections/?dog_initializer__user_id=${state.currentUser.user_id}`,
          method: 'GET',
        } 
        let resp = await request(options)
        setConnections(...connections, ...resp.data)
      }

    getConnections()
    getOtherConnections()
}, []);

return (
  <div>
      {/* filter connections for being accepted */}
    {connections.filter((connection) => connection.is_accepted === true && connection.dog_target.).map((connection) => <IndividualConnection key={connection.id} connection={connection} />)}
    </div>
  )
}
const IndividualConnection = ({ connection }) => {
  return (
    <Row className="connectionRow">
        {connection.}
    </Row>
  )
}