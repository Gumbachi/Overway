import { Astal, App, Gdk } from "astal/gtk3";
import SystemControls from "../system-controls/SystemControls";
import Datetime from "../datetime/Datetime";
import MprisPlayers from "../media-player/MediaPlayer";
import VolumeControls from "../volume-controls/VolumeControls";
import Tray from "../tray/Tray";
import QuickActions from "../quick-actions/QuickActions";
import Scratchpad from "../scratchpad/Scratchpad";

export default function Overway() {
	return <window
    // visible
    className="Overway"
    name="overway"
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    layer={Astal.Layer.OVERLAY}
    keymode={Astal.Keymode.EXCLUSIVE}
    application={App}
    onKeyPressEvent={(self, event: Gdk.Event) => {
      if (event.get_keyval()[1] === Gdk.KEY_Escape) { self.hide() }
    }}
  >
    
    <box className="WindowContainer">

      <Scratchpad />

      <box vertical>

        <QuickActions />

        <box className="WidgetRow">
          <Datetime />  
          <MprisPlayers />
        </box>

        <box className="WidgetRow">
          <VolumeControls />
          <SystemControls />
        </box>

        <Tray />

      </box>

    </box>
    
  </window>
}

