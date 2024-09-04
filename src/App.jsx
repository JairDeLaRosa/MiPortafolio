import React, { useState } from "react";

import { Nav } from "./Nav";

const App = () => {
  return (
    
    <>
      <Nav />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        style={{ marginTop: "78px", }}
        data-bs-smooth-scroll="true"
        class=""
        tabindex="10"
      >
        <div className="home" id="scrollspyHeading1">
          <img src="./Elemento1.png" alt="Elemento1" style={{position: "absolute", width:"10vw", marginLeft: "40vw", marginTop: "13vh"}}/>
          <div className="info">
            <h2
              class="animate__animated animate__bounce "
              style={{ fontSize: "70px" }}
            ><em>-Hello
            <br />
            mi <u>name</u>  is <br />{" "}</em>
              
              <span style={{ color: "#4AA1FF" }}>
                <i class="fa fa-code" aria-hidden="true">
                 <code>&lt;Jair De La Rosa&gt;</code>
                </i>{" "}
              </span>
            </h2>
          </div>
          <div className="foto">
            <img src="./miFoto3.png" alt="Mi foto" style={{ width: "17vw", borderRadius: "50% 0 50%", backgroundColor: "#FFBD7B"}} />
          </div>
        </div>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo commodi
          velit, aliquid laboriosam vitae numquam eveniet quos voluptatibus,
          aperiam nemo laborum doloremque. Animi molestias sint, repellat
          debitis, aliquid dolorem consequuntur, eaque ad rem id beatae officiis
          esse amet ipsam aperiam eligendi veritatis. Accusantium distinctio
          voluptatum nemo voluptatem cupiditate rerum eveniet necessitatibus
          eaque placeat! Consequatur saepe exercitationem quibusdam, magni
          dolore quaerat delectus explicabo voluptatum. Dicta hic saepe
          obcaecati vel molestiae veritatis veniam dignissimos, nisi cupiditate
          alias tempora voluptatem, unde pariatur, iusto ullam. Itaque vel,
          minima est similique inventore iure aliquam ullam at deleniti
          blanditiis aliquid molestias optio esse minus ex voluptate adipisci
          maxime quis quam! Recusandae expedita, ut velit asperiores quis
          maiores dicta aliquid nesciunt tenetur eveniet ex non enim voluptatum
          labore deleniti in dignissimos praesentium sequi. Sit similique ut
          ullam illo et. Sapiente a commodi nemo est aliquid, distinctio labore
          cupiditate assumenda reiciendis molestiae doloribus nam, modi aperiam
          in iste pariatur. Ipsum cupiditate a aliquam nihil veniam cumque
          aspernatur ullam explicabo cum eos, quibusdam inventore dolore debitis
          similique facilis voluptatem adipisci omnis. Quaerat ipsam ut deserunt
          veritatis, inventore praesentium quisquam ipsa doloremque! Impedit
          maiores expedita quia incidunt nostrum quam repudiandae voluptatum
          beatae voluptatibus suscipit placeat qui quidem ducimus eum numquam,
          quisquam reprehenderit omnis autem ex exercitationem cum! Porro
          tempora aperiam voluptatibus in quaerat, eos quasi autem atque qui
          optio maxime assumenda quidem odit incidunt! Possimus, architecto
          reprehenderit ratione atque id eos, numquam inventore officia labore
          assumenda, rerum libero adipisci est? Porro debitis sint ullam dolor
          officiis, doloremque recusandae, laboriosam ab cum, dicta fugiat
          praesentium sapiente cupiditate doloribus aut distinctio fuga.
          Expedita, obcaecati? Fuga aliquid tenetur optio corporis facere
          reprehenderit culpa consectetur natus cumque laborum. Harum,
          accusantium vel sunt modi laboriosam soluta nisi voluptate impedit
          perferendis at atque mollitia id sequi iusto earum eius illum
          voluptatum aspernatur quo esse unde, magnam tenetur! Quaerat
          laboriosam delectus aspernatur soluta ipsam, odit accusantium
          temporibus quibusdam dolorum quas unde saepe dolor quia minus suscipit
          vitae esse commodi est molestiae ratione fugit nobis nulla. Corporis
          rerum asperiores autem id odio beatae ullam officiis voluptatem totam
          aspernatur assumenda repellendus nihil ducimus esse doloremque unde,
          repellat quos facere maiores minus eaque ea? Tempore nemo nobis,
          aspernatur, inventore, eum sequi hic maiores beatae asperiores
          corporis quia minus earum et quas quae ex laudantium magnam velit
          reprehenderit? Molestias odit a commodi ea magnam odio pariatur ipsa
          iste consequatur, illum iure, quibusdam incidunt voluptates tenetur,
          eveniet at nesciunt earum voluptatibus similique. Minus numquam
          voluptate eligendi commodi recusandae officia repellendus, facilis id
          quo, obcaecati quasi nam nihil eius nesciunt illo autem, totam
          deserunt! Sequi libero dolor soluta ipsum rem dicta et molestias, quia
          voluptatibus rerum odit est tempora repellat accusamus veritatis ut
          velit impedit sed praesentium vel saepe ducimus beatae. Quibusdam
          autem ducimus sunt accusantium minus, quod sint exercitationem,
          tenetur ipsam temporibus non, facilis aperiam officia architecto quia.
          Amet animi nobis perspiciatis consequatur sunt accusamus vel ducimus
          itaque eum sed, ullam unde consequuntur ut recusandae suscipit dicta
          quam voluptatem consectetur assumenda omnis nesciunt. Dicta voluptatum
          laboriosam laudantium non soluta reprehenderit omnis aliquam.
        </p>
        <h4 id="scrollspyHeading3" class="animate__animated animate__bounce">
          Third heading
        </h4>
        <h1>An animated element</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
          atque quisquam! Molestias reprehenderit corrupti minima dolorem
          voluptatem nemo voluptatum vitae recusandae blanditiis? Nesciunt
          ratione molestias cupiditate doloribus vitae obcaecati, nihil in quam
          ipsam. Repudiandae omnis assumenda atque ipsam optio quos voluptas
          officia veniam, ullam quo doloribus a cum, aliquam dolorem expedita,
          quisquam quam laudantium porro est maxime. Nam esse repellendus harum,
          quos ab similique cum ipsum totam sed officiis distinctio libero,
          recusandae fugiat nulla tempore illo veniam officia? A praesentium
          saepe ducimus blanditiis dolore ut voluptatibus odit! Tempora velit
          deleniti blanditiis dolorem perspiciatis repellat voluptatem aliquid,
          unde rerum nam iusto at quo enim. Earum optio nemo dicta nostrum autem
          repudiandae fuga! Beatae, veritatis rerum asperiores aut placeat
          nostrum quae quas, expedita officiis quasi fuga mollitia, rem modi
          iste provident nobis obcaecati vitae eveniet sit. Ipsa a consequuntur
          rerum commodi id dignissimos eos quaerat eveniet voluptatum nemo fugit
          perspiciatis unde, nihil quos, mollitia voluptate iure vel fugiat
          facilis? Reiciendis blanditiis ratione magni, minus laborum, mollitia
          tenetur omnis ipsa vero odit enim quia ut repudiandae quos possimus
          quidem hic. Velit officiis eligendi, tenetur culpa harum animi dicta
          minus corporis aperiam porro obcaecati atque esse saepe nihil eum nisi
          perspiciatis. Atque laboriosam totam aliquid earum blanditiis debitis
          fuga qui obcaecati delectus fugiat, harum et nostrum non quibusdam
          saepe, aspernatur dolore eaque? Praesentium quidem dolorem est. Totam
          illum, suscipit facilis molestias quod quia quaerat cupiditate illo,
          laudantium dignissimos excepturi. Doloremque minima et fugit minus,
          cumque dicta dolorum quisquam! Esse maiores eveniet corrupti adipisci
          modi blanditiis. Repellendus rem magnam aliquam delectus dolore totam
          vel libero illo quibusdam? Aut ducimus veritatis mollitia doloribus!
          Minus vitae pariatur architecto velit sapiente, nihil consectetur iste
          rerum ad optio facere non minima quae voluptas neque reiciendis
          accusantium eveniet suscipit earum? Ut nihil nesciunt id praesentium
          neque exercitationem voluptates deserunt eius velit! Laborum
          voluptates repudiandae doloribus ipsam magnam amet ut numquam labore
          alias pariatur blanditiis voluptatem, praesentium veritatis aspernatur
          corporis veniam cum perspiciatis provident nam. Consequatur architecto
          saepe labore voluptate nostrum enim libero modi odio ea, est veritatis
          iste tempora suscipit aliquam ipsum tenetur reprehenderit deleniti
          magni dolorem. Animi ducimus, architecto quae rerum ad tempore sit id
          fugit deleniti, minima, eaque perferendis maiores eum? Amet nostrum
          aspernatur fugiat esse laudantium cupiditate excepturi voluptate ipsam
          repellat nesciunt doloremque, quae beatae laboriosam tempore,
          molestiae explicabo repudiandae eius? Expedita nostrum quis, iste enim
          inventore quasi aperiam accusamus modi dolore facilis vitae eius
          minima! Labore repellat iure et repudiandae, magni ad culpa blanditiis
          eaque ullam nam deleniti, dolorum, repellendus perferendis. Explicabo
          quia et veritatis reiciendis eaque fugiat eveniet asperiores fuga,
          aperiam vel nihil sed incidunt libero itaque minus dolores corrupti
          cumque esse excepturi vero qui distinctio obcaecati adipisci
          voluptatem. Fugit, alias hic impedit fuga dolore exercitationem
          aliquid ipsa quidem, tempora cumque labore temporibus! Dignissimos
          sunt dolores voluptate cupiditate quis quae architecto. Error quo
          quaerat excepturi consequatur at aperiam facilis reprehenderit
          doloribus illum cumque quis fugiat iste tenetur assumenda, laboriosam,
          eaque ex? Architecto, illum atque? Repellat officia eum quisquam vitae
          adipisci iure ullam, corrupti totam enim?
        </p>
      </div>
    </>
  );
};

export default App;
