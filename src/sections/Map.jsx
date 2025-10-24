import YaxisBorderHeading from "@/components/YaxisBorderHeading";

const Map = () => {
  return (
    <div className="h-screen w-full relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.22121965362!2d90.43922712653182!3d23.81466548538705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c99cbbf86385%3A0xd0432929df4c5992!2sWalton%20Hi-Tech%20Industries%20PLC.!5e0!3m2!1sen!2sbd!4v1761275706467!5m2!1sen!2sbd&gestureHandling=greedy"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-screen"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <YaxisBorderHeading heading="CLICK TO LOAD THE MAP" />
      </div>
    </div>
  );
};

export default Map;
