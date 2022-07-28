import { getPublicAsset } from 'utils';

function StatelessComponent(props) {

  return (
    <div style={{padding: '40px 60px', fontSize: '1.2rem'}}>

      <a href="#a11y-hidden">[Skip to content Link] Go to A11Y Hidden Component</a>

      <h2> stateless function component </h2>
      <a href="https://reactjs.org">Learn React</a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum
        similique molestiae deserunt doloribus veniam, voluptatum at dignissimos
        repudiandae architecto consequuntur eligendi quibusdam, ducimus corporis
        ipsam animi necessitatibus, quod quis.
      </p>

      <figure className="banner" style={{margin: 0}}>
        <img src={getPublicAsset('cover.jpg')} alt="" height={400} />
        <figcaption>선한 영향력, 플라스틱으로부터 바다를 지키는 능력 우리 모두를 생각하는 '선한 영향력'이 더 큰 영향력이 되도록...</figcaption>
      </figure>

      <p>
        Nam officia quis quod, consequatur accusamus earum temporibus quidem
        saepe possimus sunt error laboriosam nesciunt alias laborum doloribus
        est sapiente eveniet rerum asperiores, magnam ratione? Deserunt
        doloremque qui quam velit!
      </p>
      <h3 id="a11y-hidden"><abbr title="Accessibility">A11Y</abbr> Hidden Component</h3>
      <p>
        Dolorem accusamus aperiam molestias architecto obcaecati earum neque
        ducimus dolore hic, esse ut recusandae fugit quod enim, quae rem sint
        ipsam amet. At adipisci atque aliquam similique, expedita nulla in.
      </p>
      <p>
        Minima optio, natus distinctio odit, deleniti assumenda fugit id non
        temporibus earum dicta asperiores commodi. Aspernatur consequuntur quas
        at, accusamus in enim sunt tenetur voluptas earum facilis dolores nobis
        amet.
      </p>
      <p>
        Numquam natus voluptate saepe est omnis rem quidem dicta explicabo nobis
        quisquam id magnam rerum eius, expedita recusandae minima asperiores
        laboriosam adipisci totam fugiat minus. Facilis, maxime blanditiis!
        Corrupti, fugiat?
      </p>
    </div>
  );
}

export default StatelessComponent;
