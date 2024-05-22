import React, {useEffect, useState} from 'react'


export default function Bai6() {
    const [scroll,setScroll] = useState(0)
    
    document.title = `vị trí cuộn:${scroll}`;
    
    useEffect (()=>{
       
        const handleScroll =()=>{
            setScroll(window.pageYOffset)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
        
  
  return (
    <div>Bai6
        
        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt officiis tempore placeat nesciunt praesentium aliquam, minima totam quas laudantium dolorem itaque. Tempore animi possimus debitis, iusto consectetur eum? Deserunt.
        Quam, possimus! Quibusdam laboriosam, officia ducimus repellendus dicta maiores quas voluptatem corporis voluptatibus! Mollitia quod reiciendis, iusto cum omnis expedita dolor voluptas maxime hic neque eligendi a, voluptatem, beatae placeat.
        Excepturi magnam ducimus illo delectus. Rem et, consectetur illum recusandae magni earum aut, quo perferendis officiis maxime, eveniet nesciunt ullam aspernatur obcaecati laboriosam magnam corrupti. Doloremque ea tempora fuga maxime.
        Aliquam voluptatem ex hic eius ipsum magni optio velit veniam eveniet. Eveniet explicabo distinctio placeat, praesentium ipsam veritatis, expedita suscipit ipsa iste consequuntur doloribus laboriosam iure sequi, voluptatem quibusdam repellendus?
        Doloremque expedita, animi sapiente laboriosam soluta suscipit repellendus quis, aspernatur neque vero et, ratione mollitia ipsa illum. Ipsum velit delectus ipsa! Amet minima perferendis architecto iusto maiores tempore aliquid voluptates.
        Voluptate porro quis aliquid molestiae, alias expedita voluptates obcaecati dolores accusamus repudiandae, reprehenderit veritatis vel suscipit dolore maxime! Odit vero impedit et alias cum pariatur architecto autem ea aut quasi?
        Officia soluta voluptates animi minima cumque quam blanditiis voluptas veniam rerum, ducimus maiores facere maxime ipsa explicabo error sit est provident laborum? Quidem ullam omnis quas magni nulla quae distinctio.
        Laboriosam non tempore fuga corporis, reiciendis veniam dolorum exercitationem placeat repellat aut consequuntur quaerat eveniet minus optio id vitae nobis corrupti blanditiis minima voluptas vel. Laboriosam explicabo dolor ex quo?
        Tempora exercitationem nisi accusantium dolorum dolores adipisci cumque sunt a totam quisquam culpa, libero hic illo optio doloribus aliquam? Numquam nihil excepturi nobis vero odio? Fuga maxime veniam cupiditate ipsam.
        Totam eos quas debitis blanditiis iure excepturi est similique perferendis. Rem, accusamus cupiditate itaque officia explicabo, et a sunt cumque quod repudiandae perferendis, animi labore est inventore? Quia, placeat a.
        Placeat, mollitia, amet fugiat ducimus, aliquam illum quod sint impedit ad quis nulla non magnam! Eos soluta cupiditate esse a quasi explicabo hic, voluptates, voluptatem mollitia reprehenderit id libero minus?
        Quos sequi veniam eveniet consectetur expedita nisi labore blanditiis esse cupiditate optio quidem itaque, dolorum veritatis natus alias sapiente magnam quasi iste enim dicta repellendus deserunt ad sunt? Et, perferendis.
        Magnam doloremque mollitia tempore, odit quas magni porro. Dolorum, temporibus qui assumenda non veniam maxime at quam in voluptates! Tempora quas quod odit blanditiis numquam, harum autem ipsa rem voluptatibus.
        Optio doloribus quos eligendi officiis hic dolore nulla ullam omnis eius saepe! Laudantium iste quas ipsa incidunt deleniti accusantium delectus ab quidem, voluptatem eaque tenetur exercitationem, numquam deserunt dolores autem!
        Praesentium molestiae amet odit recusandae, quis sed consectetur cumque minima doloribus, accusamus neque? Vero sunt hic architecto eveniet, incidunt enim maiores, tenetur reiciendis consequuntur illum ratione iure nobis saepe voluptatem?
        Voluptas quasi aspernatur laudantium et. Laudantium quia repudiandae temporibus quos aliquid repellat non magni veniam. Ratione, illo maxime? Numquam officiis, soluta illo iusto aperiam perferendis iste maxime facere magnam eius.
        Cumque sequi impedit voluptates dolore rem quod, tenetur esse molestiae, eligendi accusantium dignissimos aut asperiores doloremque nam quibusdam? Deserunt tenetur distinctio iure placeat autem nam numquam fugiat enim libero sint?
        Harum deserunt cumque dolorem molestiae laboriosam minima similique eaque autem id. Quo ipsum asperiores optio ea quas vel maxime, totam similique illo deserunt reiciendis possimus eius aut modi laudantium doloribus.
        Quod, fugit. Error eveniet mollitia amet iusto. Libero nulla voluptatem quae deserunt, magni amet sunt inventore itaque ratione! Officia quas architecto quasi asperiores ducimus nemo quidem iste perferendis id odio?
        Praesentium natus soluta dolorem cumque repellendus, aut exercitationem hic, aspernatur et iusto temporibus quas eos reprehenderit! Soluta, accusantium? Sed repellat iusto pariatur consequatur eius, ad distinctio molestiae harum exercitationem excepturi?
        Ipsam officiis rerum culpa soluta tempore? Pariatur quibusdam, est modi aperiam soluta dolorum repellendus tenetur delectus architecto quas quod in. Doloremque illo ipsum laboriosam eum rem culpa amet odit at?
        Facere dignissimos et sit. Laudantium dignissimos, doloribus sequi dolores atque distinctio excepturi, at sed a ullam recusandae nulla similique suscipit! Ducimus cumque id assumenda placeat facilis temporibus, rem quia voluptatem?
        Dolores, optio. Provident beatae laboriosam impedit sapiente excepturi maiores aliquid repellat? Nobis animi autem a, sequi voluptatibus repellendus, nulla odit suscipit officia possimus saepe modi inventore amet exercitationem sed sint.
        Quaerat fuga minus temporibus qui consectetur blanditiis incidunt amet itaque saepe beatae, sint iste cupiditate, maiores omnis facilis. Dicta velit optio maxime numquam impedit eveniet iste recusandae quam quidem a?
        Esse ea eligendi, nesciunt incidunt delectus possimus odit quis rerum qui earum aperiam atque reprehenderit vitae autem mollitia nisi in, quae corporis voluptates iste. Vel ex necessitatibus temporibus molestias adipisci.
        Fugit ab totam dolore molestias veritatis eos repellat quibusdam natus! Eius reprehenderit fuga quae velit sit, temporibus dolores optio voluptas incidunt aut hic nesciunt, quidem vel, nulla delectus sunt natus!
        Id voluptatem labore veritatis minus aliquid qui, sit molestiae! Distinctio doloribus maxime, vel veniam sequi facilis perspiciatis saepe tempora explicabo aperiam placeat earum quisquam voluptate, fugiat nesciunt qui minus. Libero!
        Accusamus dolorum voluptates necessitatibus odit provident id vitae voluptatum enim excepturi in beatae illo eum, cum totam aperiam suscipit at quisquam rerum nobis accusantium adipisci nam doloremque! Tempora, eos quasi.
        Exercitationem cumque eum amet maiores? Dolore iusto voluptatibus harum ad totam non adipisci eligendi necessitatibus, molestiae voluptates vel sed doloribus! Ducimus recusandae quibusdam molestias optio veniam animi impedit excepturi labore.
        Placeat sapiente incidunt dignissimos debitis, deserunt adipisci. Laboriosam, vero deserunt culpa quam alias ullam repellat reiciendis fugit, hic tempora assumenda soluta voluptates. Minima voluptate fugit quo. Quasi beatae in exercitationem.
        Consequuntur magnam atque sunt? Commodi, fugiat quod. A accusantium qui aliquid sit explicabo dolor possimus consectetur impedit et nulla tempora maiores id laboriosam, praesentium ipsa, non quidem, quaerat blanditiis neque.
        Ea dolor suscipit autem, aliquid exercitationem vel qui nam quisquam vero. Consectetur, asperiores perspiciatis minima, dolor quaerat repellat doloribus eligendi, earum dolores cupiditate dolorem id quae mollitia cumque iure nulla?
        Molestiae dolorem eius quas consectetur eligendi sapiente voluptatum adipisci impedit voluptate! Soluta assumenda velit perferendis aperiam fugiat mollitia exercitationem fugit nobis, dolorem, reprehenderit eveniet quos ipsa quidem. Eveniet, omnis a.
        Asperiores excepturi aut aperiam, commodi a in! Facere debitis nesciunt architecto, expedita dolor rerum, totam dignissimos recusandae praesentium porro autem doloribus? Error natus distinctio architecto consectetur nam corporis earum reiciendis.
        Rem eius ipsam harum facere officiis sapiente! Possimus sit reprehenderit dolorem tenetur ex provident sunt hic natus non consectetur obcaecati optio animi et itaque qui iusto, facilis assumenda. Aperiam, tempora.
        Ducimus corporis commodi veniam reiciendis porro earum, eos odio rem non accusamus enim neque reprehenderit ex at vel! Unde labore obcaecati sequi vitae tempore explicabo ipsum repellat vero qui a!
        Adipisci fugiat, dolorum, natus culpa quos itaque error alias magni, temporibus exercitationem dolores. Repellat eius ab qui soluta iste accusamus, possimus earum praesentium nulla repellendus, rem ratione doloremque omnis dignissimos.
        Perspiciatis reprehenderit eaque doloremque quo similique iste voluptas aliquam ducimus veniam ut numquam cupiditate sit hic quis id cumque fugit nihil in laborum, delectus at illo dicta vel. Velit, nostrum?
        Magnam quam harum quae tempora saepe repellendus dolore at necessitatibus debitis ab? Alias mollitia et doloribus laboriosam, illum aperiam totam. Minus quam distinctio porro incidunt alias architecto minima cumque necessitatibus.
        Et voluptates dolorum natus? Excepturi tempore temporibus hic laborum necessitatibus. Laborum nostrum reprehenderit officiis vitae suscipit adipisci consectetur, placeat pariatur est quod nobis, debitis nisi veniam doloribus maiores numquam libero!
        Ipsa commodi adipisci quae unde vel vitae magni enim. Dolorem quaerat rem sit magnam molestiae? Explicabo illum cum, molestiae autem dolore quos odit at tempora culpa, nisi facilis neque! Quasi.
        Veniam fuga aliquid saepe unde numquam impedit aut? Hic modi neque illo numquam quia similique molestias delectus sint deserunt rem aspernatur fugit, natus nihil sit ducimus repudiandae. Quis, expedita vel!
        Iste esse harum magni, ex vel reprehenderit hic incidunt dolores nisi! Magnam consequatur, quasi, non expedita accusantium fuga libero commodi adipisci praesentium sit, molestias est ea porro nulla tenetur nostrum!
        Quod enim perspiciatis fuga inventore esse facilis libero quas odit est officiis, voluptatum veniam rerum voluptatem unde autem accusamus nobis aliquam laboriosam dolorum mollitia ab in tempora repudiandae nemo. Accusamus.
        Veniam dolore quaerat corrupti possimus officia omnis modi quisquam quibusdam eos cupiditate dolores, veritatis quasi sit, deleniti dolor dicta? Quis est blanditiis corporis fugiat culpa facere voluptate esse explicabo recusandae?
        Distinctio excepturi perferendis tempora asperiores tempore eveniet, optio odio! Voluptates, doloribus! Nisi necessitatibus aspernatur obcaecati, culpa facilis blanditiis autem id ex minima neque consectetur fugiat ea amet quos ipsam non?
        Autem natus aliquam nulla voluptatem omnis quis, et sapiente quaerat aut optio, incidunt, unde at. Expedita soluta, blanditiis consequuntur, odit ipsum vero ut, tempore commodi cumque exercitationem atque obcaecati voluptas.
        Et fuga maiores alias deserunt quibusdam atque exercitationem, id animi at! Officiis asperiores eveniet ipsa laboriosam, molestias excepturi voluptas, fugit beatae accusantium distinctio cum, obcaecati expedita nihil perferendis fuga quas.
        Doloribus dicta quidem veniam, distinctio ut ipsa impedit fugiat cupiditate sapiente! Aperiam dolor ad quasi quod dolores magnam. Laudantium soluta facere numquam aliquid corrupti accusantium vitae ex quod quaerat. Excepturi!
        Itaque quibusdam cum saepe ullam autem corrupti perferendis. Sequi at doloremque eveniet cupiditate culpa eius provident dolore soluta, labore dignissimos! Impedit autem, illum ullam culpa libero quibusdam labore numquam maxime?
        </p>
       
    </div>
  )
}
