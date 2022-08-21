import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { playOutline } from 'ionicons/icons';

const DayOne: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Day One</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Day One</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonItem>
            <IonIcon icon={playOutline} slot="start" />
            <IonCardTitle>Day One</IonCardTitle>
            <IonCardSubtitle>
              <blockquote>
                Treat every day like it's the first day. All that excitement,
                energy and over the top follow through and effort that's so easy
                the first day, make sure you bring that everyday and you will
                thrive in anything you decide to do!
              </blockquote>
            </IonCardSubtitle>
          </IonItem>
          <IonCardContent>
            <p>Ok so you have decided to be a developer, now what?</p>
            <p>
              Well as with anything in life you are faced with a sea of
              questions so let me help to boil it down to the skills that I have
              used throughout my career vs skills you continuosly learn.
            </p>
            <p>First Question: Why did I put the trailing ../ after Day One?</p>
            <p>
              An absolutely mandatory skill as a developer or many other trades
              for that matter is understanding file paths and how to navigate
              the filesystem. After all everything you view on any digital
              device utilizes a series of files living in different
              directories(folders). When navigating the filesystem
              programmatically or on the command line ../ is how you go up
              levels. So there you have it Day One if your reading this sentence
              you just learned an invaluable lesson remember to ../ your skills
              everyday!
            </p>
          </IonCardContent>
          <IonCardContent>
            <p>
              Next up for Day One it is time to figure out what sort of
              developer you want to be first. You can always learn more later
              it's much easier to learn other specialties after you have
              interacted with them from the viewpoint of another part of the
              process.
            </p>
            <p>
              The General Direction of your DevPath is influenced by your
              biggest passion. If you are very artistic perhaps like design but
              also want to code then UI/UX will have more emphasis. If you like
              solving complex math and physics then games might be right up your
              allie. To step a bit further back you could ask yourself do you
              want to build the user interface that people interact with or the
              business logic behind the scenes. This is a hard question and
              should be give careful thought and consideration. You don't have
              to make a final decision just yet though. There are a set of
              fundamental skills that cross over betweeen specializations that
              you can begin learning to be productive, get your feet wet and
              have a little better understanding of what it is your trying to
              choose between.
            </p>
            <p>
              One Great thing about learning right now is that you can learn one
              language and be useful on the front and backend, for this reason I
              believe your first scripting language should be javascript.
            </p>
            <p>
              There are a handful of key concepts that you need to be familiar
              with regardless of what language, platform or even project for
              that matter they are the most basic building blocks of most
              scripting languages.
            </p>
            <ul>
              <li>Variables</li>
              <li>Conditions</li>
              <li>Functions</li>
              <li>Loops/Recursion</li>
            </ul>
            <h3>
              With Just 3 tools you can build incredibly complex applications.
            </h3>
            <p>
              Understanding these concepts from the start will drastically
              accellerate your ability to uptake new material later on because
              you will be interacting with these items in different ways in
              every project you build.
            </p>
            <p>
              Variables are easy, nothing more than a container to hold things.
              You can think of a cradboard box completely generic you can put
              things in and take them out, even replace them with new things or
              add more things to the box.
            </p>
            <p>
              Conditions again pretty straight forward this really comes down to
              true or false and is a mechanism that allows your program to make
              decisions. you present the question it checks to see if it is true
              or false and then follows the corresponding set of instructions,
              if true do this if false do that. The condition or conditions are
              the start of a conditional set of instructions.
            </p>
            <p>
              Next up is Functions, Functions are a predefined set of
              instructions that can be reused throughout your program by
              "calling" the function. To call a function is like hitting the
              start button on that set of instructions.
            </p>
            <p>
              Finally Loops or Recursion, this is where we get the computer to
              do repetitive tasks for us super fast. This also ties together the
              three primary elements above. Take this for an example scenario.
              You have a variable which contains a function. this function
              contains more variables and a loop which contains a conditional
              statement to control when to stop the loop. The loop contains
              reusable logic to execute repeatedly while the loops condition
              remains true.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DayOne;
