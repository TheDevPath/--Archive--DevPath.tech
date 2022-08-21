import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  contractOutline,
  documentLockOutline,
  flameOutline,
  navigate,
  navigateCircleOutline,
  navigateOutline,
  rocketOutline,
  serverOutline,
} from 'ionicons/icons';
import logo from '../assets/logo.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonImg
            slot="start"
            src={logo}
            style={{ maxWidth: 80, margin: 5 }}
          ></IonImg>
          <IonTitle>Welcome To DevPath</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome To DevPath</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Intro Welcome Blurb */}
        <IonCard>
          <IonItem>
            <IonIcon icon={navigateOutline} slot="start" />
            <IonCardTitle>DEV PATH guiding principles</IonCardTitle>
          </IonItem>

          <IonCardContent>
            <blockquote>
              “Great Leaders Create the System That Produces the Best Product,
              Not Just The Best Product.”
            </blockquote>
            <p>
              On my journey learning web development I found one of the biggest
              hurdles to overcome was figuring out what to learn first... and
              next for that matter. Although there are lots of great learning
              resources available it is easy to quickly get lost in the land of
              information overload.
            </p>
            <p>
              This is partially due to the fact that there are so many things
              you can do and directions you can take and still be a successful
              developer; however I felt that was leaving new developers short
              changed. So I decided to dig in and find a core path that would
              build the foundation needed to be successful in whatever more
              advanced development path one might choose.
            </p>
            <p>
              Along the way I discovered that teaching others was a great way to
              really test my knowledge on the subjects I just learned. It also
              helps to quickly discover areas I did not understand as well as I
              thought. Thus DEV PATH was born, with a key guiding principle
              <strong> provide a concise path for each skill set</strong>. Each
              learning path should provide a quick overview that enables someone
              at any skill level to jump straight into the lessons suited to
              their level of knowledge.
            </p>
            <p>
              Following this principle lessons are organized in logical,
              progressive building blocks. This allows a complete beginner to
              progress quickly or an experienced developer to quickly find a
              topic to get a refresher or pick up where they left off and expand
              their skill set.
            </p>
            <p>
              I hope you will find useful lessons to evolve your developer
              journey and share with new developers to get their journey
              started.
            </p>
          </IonCardContent>
        </IonCard>

        {/* Start page Content */}
        {/* Begginer Quick Tips Section */}
        <IonCard>
          <IonItem>
            <IonIcon icon={rocketOutline} slot="start" />
            <IonCardTitle>
              Quick Tips to Help Begginers Start a New Path
            </IonCardTitle>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              We all had the same questions no matter when or what you learn to
              code there is so many options what do I start with?
            </p>
            <p>
              First question you have to ask yourself is what do you enjoy
              doing?
            </p>
            <p>
              I'll elaborate on this point to help give it more relavance. Your
              on DevPath so clearly you have some interest in tech and possibly
              building apps or games or something in the digital world. The key
              perspective of the question here is do you want to draw or animate
              or do you want to program the physics engines in video games.
              Maybe you want to get into webRTC, crypto, web3, Defi, create your
              own DAO. There are a lot of aspects of development that can be
              focused on as specializations. I suggest you find a specialization
              that interests you and get as good as possible at that one thing.
              Once you are good enough at that to decide you are bored, and this
              means such an expert there is no challenge left. Then you look at
              learning something different. So this is why you need to ask
              yourself right from the start what aspect you are most excited by.
            </p>
          </IonCardContent>
        </IonCard>
        {/* Bleeding Edge Tech to Learn Now Section */}
        <IonCard>
          <IonItem>
            <IonIcon icon={flameOutline} slot="start" />
            <IonCardTitle>Bleeding Edge Tech to Learn Now!</IonCardTitle>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              Trying to figure out what the next hot new tech to blow up is
              going to be but don't even know whats used now! check this section
              to find out from industry vetrans what they think will be next top
              tech that young devs should learn.
            </p>
            <ul>
              <li>Web3 Distributed Web</li>
              <li>Blockchain</li>
              <li>PWA Progressive Web Apps</li>
              <li>3D</li>
            </ul>
          </IonCardContent>
        </IonCard>
        {/* Top Tech Stacks for Web3 */}
        <IonCard>
          <IonItem>
            <IonIcon icon={serverOutline} slot="start" />
            <IonCardTitle>Top Tech Stacks for Web3!</IonCardTitle>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>
              Trying to figure out what a web3 tech stack looks like? I know I
              went through the same thing there's a lot of new things coming out
              fast and it's challenging to find some of it if you don't alrady
              know what it's called. That's why in this article I'm going to
              share all the fruits of my latest journey down the rabbit hole of
              What's the best Web3 Stack Ready for Production and Scaling.
            </p>
            <ul>
              <li>Moralis</li>
              <li>Alchemy</li>
              <li>Ethers.js</li>
              <li>Hardhat</li>
              <li>IPFS</li>
              <li>Metamask</li>
              <li>web3.js</li>
              <li>thirdweb</li>
              <li>OpenZeppelin</li>
              <li>Chainlink</li>
            </ul>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={documentLockOutline} slot="start" />
            <IonCardTitle>Getting Started with Smart Contracts</IonCardTitle>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            <p>The Obvious Question ... What Is A Smart Contract?</p>
            <hr />
            <p>
              A smart contract is simply a small program which is placed on the
              blockchain therfore public and immutable. We will go deeper into
              why you would want public and immutable later but know that they
              are key differences vs the current status quo.
            </p>
            <p>
              If you are a web developer that has used cloud functions you can
              think of a smart contract as a cloud function. It has a public
              address to access and run functions on demand which you define as
              your "serverless" backend.
            </p>
            <p>
              Ok so I tried to keep that simple but there's still acouple
              technical terms in there that should also be explained so that the
              first statement makes sense. Immutable it's a mouthful but the
              simple definition is, something that is immutable cannot change.
              If you think about it in terms of a typical contract that's a good
              thing, you wouldn't want the other party changing that contract
              without your consent. That is something that blockchain is
              uniquely well suited for.
            </p>
            <p>
              Let me give you a quick example to help visualize how this might
              apply to everyday life. Take government or corporate spending for
              example these are large continuos contracts which need to be
              audited to ensure no funny business! If these were managed on the
              blockchain there would be transparency and an unchangable
              historical record.
            </p>
            <p>
              Even if the data being interacted with is not public although in
              something like government it probably should be. The mechanisms
              which handle the transactions can be inspected to assure there can
              be no meddling in the middle.
            </p>
            <hr />
            <p>
              The hardest part of jumping into a new tech stack is reading
              through hordes of documentation to try and form an opinion on what
              the best tools to start with are when you've never even heard of
              any of them!
            </p>
            <p>
              That's why I am writing this to share what I found so maybe you
              can save some time searching and get building. I have found over
              the years learning countless new languages, apis etc. it really
              helps to understand what is going on under the hood but with a
              little bit of convenience from a nice transparent library.
            </p>
            <p>
              What do I mean by that? ... Let me explain, as we write software
              the goal is to write code which hides complexity and just delivers
              the business logic to the user. So as we move up the toolchain
              more and more is hidden. Once you understand what your trying to
              do at the core it is much easier to use these convenience tools,
              however in the beginning sometimes too much is hidden away for
              someone new to the process to get a clear picture of what is going
              on.
            </p>
            <p>
              For this example I am choosing to use Hardhat as our build tool
              and ethers.js as our convenience library. Other common tooling
              would Truffle and web3.js both are similar.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
