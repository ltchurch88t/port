import React, {useState} from 'react';

const AboutSection = props => {
  const [tab, setTab] = useState('tech');
  return (
    <div className="AboutSection mv5">
      <div className="flex flex-wrap tl-l w-100 tc">
        <a
          href="#tech"
          onClick={() => setTab('tech')}
          className={
            tab === 'tech' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Vintage Tech Enthusiast
        </a>
        <span className="seperator ph2">|</span>
        <a
          href="#creative"
          onClick={() => setTab('creative')}
          className={
            tab === 'creative' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Creative Director
        </a>
        <span className="seperator ph2">|</span>
        <a
          href="#developer"
          onClick={() => setTab('developer')}
          className={
            tab === 'developer' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Full Stack Developer
        </a>
        <span className="seperator ph2">|</span>
        <a
          href="#artist"
          onClick={() => setTab('artist')}
          className={
            tab === 'artist' ? 'outlined-text activePane' : 'outlined-text'
          }>
          Artist
        </a>
      </div>
      <div className="relative tabContainer">
        <div className={tab === 'tech' ? 'tab activeTab' : 'tab hiddenTab'}>
          <p className="">
            I have always had a love for tinkering and using old technology in
            new ways. One of my favorite pieces to fiddle with is my 1982 Apple
            //e. There’s nothing quite like the buzz and ghosting of a classic
            green monochrome CRT display and the clanking of an old floppy
            drive. Being able to work with older computer gear gives you a much
            larger appreciation and understanding of the current state of
            computing as the challenges to step back 40 decades allows you the
            ability to dive into a fundamental understanding of the machine.
          </p>
          <p className="">
            Whether it’s working in assembly language or trying to find a way to
            connect older tech to modern setups, the learning experience of
            working within the limitations of 64k ROM memory and a limited DOS
            system employs a different way of tackling a problem. By working on
            these projects it has given me the opportunity to expand upon this
            new knowledge and bring in those elements to my current workflow on
            more modern computers and tech stacks.{' '}
          </p>
          <p className="">And besides it’s just fun!</p>
        </div>
        <div className={tab === 'creative' ? 'tab activeTab' : 'tab hiddenTab'}>
          <p className="">
            Having experience in both the development and design world has
            provided many opportunities to grow in both and bridge the gap
            between the two disciplines. Development practices are built using
            the limitations and creativity of language frameworks and practical
            application where as design is about using basic rules to stretch
            the boundaries of what we can do with technology to ultimate break
            free of any limitations.
          </p>
          <p className="">
            Using my knowledge of both sides, I have been able to offer a
            wholistic approach to many projects I have worked on. I am able to
            communicate with the development team with my expertise in
            programming as well as prepare designs, push designers, and gather
            both teams together to achieve a better end product for users. My
            philosophy has always been from a creative direction, if I know I
            can code it then the designers and developers that work with me can
            do even better.
          </p>
        </div>
        <div
          className={tab === 'developer' ? 'tab activeTab' : 'tab hiddenTab'}>
          <p className="">
            My career has been built from the ground up on implementing, and
            designing well built programs. I have always enjoyed design and
            strive to push myself all the time on that front, however the true
            joy I find is morphing a flat concept into a fulling functioning
            piece of software that people can interact with. Development and
            developers provide the basis for our modern world and being a part
            of that group pushing the world forward is a fantastic place to be.
          </p>
          <p className="">
            I have used many tech stacks, languages, and frameworks throughout
            my journey including C/C++, Java, React, JavaScript, GoLang, Rust,
            and several others. Lately there has been a large focus on using
            React to produce websites, PWA’s, and a host of other applications
            which has also been a prevalent focus of mine. Some of the great
            things to come out of this is a new API specification in GraphQL
            which I have taken up in full stride. I have been working on several
            projects to continue to find efficient and easily implementable code
            structures for GraphQL and I am looking forward to pursuing this
            further.
          </p>
          <p className="">
            As a Full Stack Engineer, I enjoy every aspect of programming and
            use it as a way to continually improve myself and my knowledge as a
            Software Engineer. If you have a project in mind please feel free to
            reach out and let’s start a discussion on your project!
          </p>
        </div>
        <div className={tab === 'artist' ? 'tab activeTab' : 'tab hiddenTab'}>
          <p className="">
            I am a painter and muralist that primarily works with acrylics and
            spray paint. I have been heavily influenced by the works of Francis
            Bacon and find myself representing social spaces and ideas through
            confined and uncomfortable scenes. I focus on portraying spaces and
            people in familiar situations that I have found myself in, in order
            to explain those feelings of insecurity and uncertainty. A large
            part of my early work focused on the struggle between myself and the
            search for the divine by simplifying the use of colors and focusing
            solely on the emotions effected by the composition and movement of
            form. As I’ve continued this pattern, I have recently begun focusing
            my efforts on looking at scenes as a whole and guiding viewers into
            feeling the emotions evoked by the settings and figures placed
            within the four borders. With the global pandemic ongoing, I have
            been representing the concept of isolation and my perspective on its
            meaning and representation in everyday life. My work describes these
            emotions and struggles in a way that provides a connection with the
            imagery while creating a space for self-reflection.
          </p>
          <p className="">
            I use spray paint and acrylic as my primary mediums for they allow
            me to work quickly and get my ideas on the canvas as fast as
            possible. This grants me the ability to move and adjust with the
            paint and to make improvised decisions when inspiration strikes. I
            do not work with scenes that are conventionally beautiful or awe
            inspiring but instead I focus on capturing the mundane and ordinary
            to deconstruct the powerful emotions that they evoke and that we
            often take for granted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
