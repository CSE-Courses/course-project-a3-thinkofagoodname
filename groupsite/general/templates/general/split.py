from pydub import AudioSegment
def split(seconds):
    sound = AudioSegment.from_mp3("furelise.mp3")
    hw=seconds*1000
    second_half = sound[hw:]
    second_half.export("afterSplit.mp3",format="mp3")
    first_half= sound[:hw]
    first_half.export("beforeSplit.mp3",format="mp3")
